export default function Contacts() {
  return (
    <div>
      <div className="contacts-management">
        <div className="filter-row"></div>
        <div className="selected-contacts-row"></div>
        <div className="contacts-list">
          <div className="contact-wrapper">
            <div className="main-wrapper">
              <div className="sender-info">Alisson Santos Silva</div>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos.
              </p>
            </div>
            <div className="actions-wrapper">
              <button className="dashboard-primary-button">Responder</button>
              <button className="dashboard-primary-button">
                Marcar como lido
              </button>
              <button className="dashboard-primary-button">
                Guardar como Favorito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
