import Error from "../../../../common/popups/ErrorPopup";
import ContactCard from "../Contact";
import useGetWithToken from "../../../../hooks/useWithTokenReq";
import ContactInterface from "../../../../interfaces/ContactInterface";

interface ContactsInterface {
  list: ContactInterface[];
}

export default function Contacts() {
  const {
    data: contactList,
    error,
    isFetching,
  } = useGetWithToken<ContactsInterface>("/api/list");

  console.log(contactList);

  return (
    <div>
      <div className="contacts-management">
        <div className="filter-row"></div>
        <div className="selected-contacts-row"></div>
        <div className="contacts-list">
          <p>{isFetching && "Carregando"}</p>
          {!isFetching && contactList?.list ? (
            contactList?.list.map((v, key) => {
              const { name, email, message } = v;

              return (
                <ContactCard
                  key={key}
                  name={name}
                  email={email}
                  message={message}
                />
              );
            })
          ) : (
            <p>Nenhum Contato Encontrado</p>
          )}
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
    </div>
  );
}
