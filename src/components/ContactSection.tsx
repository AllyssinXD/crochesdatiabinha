import "./ContactSection.css";

function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <div className="container flex-row row-center-verticaly">
          <div className="column form-container">
            <h1>Nos contate</h1>
            <p>Quer fazer uma encomenda ou matar duvidas? Entre em contato!</p>
            <input type="text" name="name" id="" placeholder="Nome" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="text" name="mensage" id="" placeholder="Mensagem" />
            <button className="secondary-button">Enviar</button>
          </div>
          <div className="column info-div">
            <h1>informações</h1>
            <span>Número de Contato : +55 11 94666-7780</span>
            <span>Email da Empresa : fabiana</span>
            <span>
              Endereço Físico
              <br />
              Rua São Caetano 1003, Jardim Valo Verde, Embu das Artes, SP
            </span>
            <div className="google-maps-info"></div>
            <div className="social-media-info flex-row">
              <img src="/images/instagra-logo.png" alt="" />
              <img src="/images/youtube-logo.png" alt="" />
              <img src="/images/whatsapp-logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
