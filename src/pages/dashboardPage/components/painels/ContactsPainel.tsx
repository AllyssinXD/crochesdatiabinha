import useGetWithToken from "../../../../hooks/useWithTokenReq";
import ContactInterface from "../../../../interfaces/ContactInterface";

import ContactCard from "../Contact";
import Error from "../../../../common/popups/ErrorPopup";
import { useState } from "react";

interface ContactsInterface {
  list: ContactInterface[];
}

export default function Contacts() {
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
      <div className="contacts-management">
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
