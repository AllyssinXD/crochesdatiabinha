import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="container flex-row row-center-verticaly">
          <div className="column flex-column">
            <h1>
              <span className="smaller-text-on-small-screen">
                Transformando
              </span>{" "}
              Fios Em <span className="pink-colored-text">Arte</span>
            </h1>
            <p>
              Peças Exclusivas e Feitas à Mão com Amor: Amigurumis, Roupas,
              Acessórios e Muito Mais.
            </p>
            <div className="button-row">
              <button className="primary-button">Fazer Encomenda</button>
              <button className="secondary-button">Acesse nosso Blog</button>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
