import ContactInterface from "../../../interfaces/ContactInterface";

export default function ContactCard({
  name,
  email,
  message,
}: ContactInterface) {
  return (
    <div className="contact-wrapper">
      <div className="main-wrapper">
        <div className="sender-info">
          <h5 className="sender-name">{name}</h5>
          <h5 className="sender-email">{email}</h5>
        </div>
        <p>{message}</p>
      </div>
      <div className="actions-wrapper">
        <button className="dashboard-primary-button">Responder</button>
        <button className="dashboard-primary-button">Marcar como lido</button>
        <button className="dashboard-primary-button">
          Guardar como Favorito
        </button>
      </div>
    </div>
  );
}
