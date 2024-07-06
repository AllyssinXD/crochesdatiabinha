import "./Footer.css";

function Footer() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <footer>
        <div className="container flex-row space-between">
          <div className="contact-info">
            <h2>Redes Sociais</h2>
            <div className="social-media-info">
              <img
                onClick={() =>
                  handleRedirect("https://instragram.com/binha4047/")
                }
                src="/images/instagra-logo.png"
                alt=""
              />
              <img
                onClick={() =>
                  handleRedirect(
                    "https://api.whatsapp.com/send?phone=5511946667780"
                  )
                }
                src="/images/whatsapp-logo.png"
                alt=""
              />
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
