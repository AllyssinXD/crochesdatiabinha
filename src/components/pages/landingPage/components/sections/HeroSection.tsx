import React, { RefObject } from "react";
import "../../styles/HeroSection.css";

type HeroSectionProps = {
  contactSectionRef: RefObject<HTMLElement>;
};

const HeroSection: React.FC<HeroSectionProps> = ({ contactSectionRef }) => {
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero-section">
        <div className="container flex-row row-center-verticaly">
          <div className="column flex-column">
            <h1>
              <span className="smaller-text-on-small-screen">
                Transformando
              </span>{" "}
              Fios Em <span className="yellow-colored-text">Arte</span>
            </h1>
            <p>
              Peças Exclusivas e Feitas à Mão com Amor: Amigurumis, Roupas,
              Acessórios e Muito Mais.
            </p>
            <div className="button-row">
              <button onClick={scrollToContact} className="primary-button">
                Fazer Encomenda
              </button>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
