import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container flex-row space-between">
          <div className="contact-info">
            <h2>Redes Sociais</h2>
            <div className="social-media-info">
              <img src="/images/instagra-logo.png" alt="" />
              <img src="/images/youtube-logo.png" alt="" />
              <img src="/images/whatsapp-logo.png" alt="" />
            </div>

            <h2>Entre em Contato</h2>
            <ul className="contacts-list">
              <li>+55 11 999999999</li>
              <li>Email da Empresa</li>
            </ul>
          </div>
          <div className="branding-and-copy">
            <p className="copyright">
              Todos os Direitos Autorais © para Dynamous Software
            </p>
            <h1 className="big-pink-title">Crochês da Tia Binha</h1>
          </div>
          <div className="dynamoussoftware">
            <div className="wrapper">
              <span>
                Feito Por
                <br />
                <span className="bold">Dynamous Software</span>
              </span>
              <p>
                Quer um site como este para sua empresa? Contate-nos pelas redes
                sociais
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
