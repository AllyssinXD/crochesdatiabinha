import useGetWithToken from "../../../../hooks/useWithTokenReq";
import ContactInterface from "../../../../interfaces/ContactInterface";

import Error from "../../../../common/popups/ErrorPopup";
import { useState } from "react";
import axios from "axios";

interface ContactsInterface {
  list: ContactInterface[];
}

export default function ContactsPainel() {
  const [seed, setSeed] = useState(1);

  const {
    data: contactList,
    error,
    isFetching,
  } = useGetWithToken<ContactsInterface>("/api/contact/", seed);

  const [x, setX] = useState(1);

  let listLenght = 0;
  if (contactList?.list)
    listLenght =
      contactList?.list.length % 3 != 0
        ? Math.floor(contactList?.list.length / 3) + 1
        : contactList?.list.length / 3;

  const listLeft = () => {
    if (x != 1) setX(x - 1);
  };

  const listRight = () => {
    if (x < listLenght) setX(x + 1);
  };

  return (
    <>
      <div className="contact-painel max-sized-painel">
        <div className="filter-row"></div>
        <div className="selected-contacts-row"></div>
        <div
          className={
            !isFetching && listLenght > 0
              ? "contacts-list"
              : "contacts-list center-everything"
          }
        >
          <p>{isFetching && "Carregando"}</p>
          {listLenght > 0
            ? contactList?.list.map((v, key) => {
                const { _id, name, email, message, createdAt } = v;

                if (key < x * 3 && key >= 3 * (x - 1)) {
                  return (
                    <ContactCard
                      _id={_id}
                      key={key}
                      name={name}
                      email={email}
                      message={message}
                      createdAt={createdAt}
                      reloadComponent={() => {
                        setSeed(Math.floor(Math.random() * 1000));
                      }}
                    />
                  );
                }
              })
            : !isFetching && <p>Nenhum Contato Encontrado</p>}
        </div>
        <div
          style={{ display: listLenght > 0 ? "flex" : "none" }}
          className="contact-list-options-div"
        >
          <button
            className="dashboard-primary-button contacts-list-button"
            onClick={() => {
              listLeft();
            }}
          >
            <img src="images/left-icon.png" />
          </button>

          <span className="list-counter">
            {!isFetching && x + " de " + listLenght}
          </span>

          <button
            className="dashboard-primary-button contacts-list-button"
            onClick={() => {
              listRight();
            }}
          >
            <img src="images/right-icon.png" />
          </button>
        </div>
      </div>
      {/* Mostrar erro em caso de falha na requisição */}
      {error ? (
        <Error
          error={`Falha na requisição: ${error}`}
          vanish_time={3000}
          onVanish={() => {
            console.log("Error Popup Vanished.");
          }}
        />
      ) : null}
    </>
  );
}

function ContactCard({
  _id,
  name,
  email,
  message,
  createdAt,
  reloadComponent,
}: ContactInterface) {
  const deleteFromMongo = () => {
    axios
      .delete(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + "/api/contact/" + _id
      )
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.data.message);
      })
      .finally(() => {
        if (reloadComponent) reloadComponent();
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="main-wrapper">
        <div className="sender-info">
          <h5 className="sender-name">{name}</h5>
          <h5 className="sender-email">{email}</h5>
        </div>
        <p>{message}</p>
      </div>
      <div className="details-wrapper center-everything">
        <p>
          {createdAt.replace("Z", "").split("T")[0]}
          <p>
            <br />
          </p>
          {createdAt.replace("Z", "").split("T")[1].split(".")[0]}
        </p>
      </div>
      <div className="actions-wrapper">
        <button className="dashboard-primary-button contacts-list-button">
          <img src="/images/reply-icon.png" alt="" />
        </button>
        <button
          className="dashboard-primary-button contacts-list-button"
          onClick={deleteFromMongo}
        >
          <img src="/images/read-icon.png" alt="" />
        </button>
        <button className="dashboard-primary-button contacts-list-button">
          <img src="/images/favorite-icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}
