import { RefObject, useEffect, useState } from "react";
import "./JobsSection.css";

type JobsSectionProps = {
  contactSectionRef: RefObject<HTMLElement>;
};

const JobsSection: React.FC<JobsSectionProps> = ({ contactSectionRef }) => {
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/binha4047/";
  };

  const [isMobile, setIsMobile] = useState(false);

  const updateMobile = () => {
    console.log(window.innerWidth);
    window.innerWidth > 1100 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  const JobsImages = () => {
    return (
      <div className="column jobs-images">
        <div className="image-grid">
          <div className="grid-container">
            <div className="grid-item medium">
              <img src="/images/grid-image1.png" alt="Image 1" />
            </div>
            <div className="grid-item">
              <img src="/images/grid-image2.png" alt="Image 2" />
            </div>
            <div className="grid-item">
              <img src="/images/grid-image3.png" alt="Image 3" />
            </div>
            <div className="grid-item">
              <img src="/images/grid-image4.png" alt="Image 4" />
            </div>
            <div className="grid-item">
              <img src="/images/grid-image5.png" alt="Image 5" />
            </div>
            <div className="grid-item  large">
              <img src="/images/grid-image6largeone.png" alt="Image 6" />
            </div>
          </div>
        </div>
        <div className="button-row">
          <button onClick={redirectToInstagram} className="primary-button">
            Veja Mais Produtos
          </button>
          <button onClick={scrollToContact} className="secondary-button">
            Faça uma Encomenda
          </button>
        </div>
      </div>
    );
  };
  const JobsProducts = () => {
    return (
      <div className="jobs-products">
        <h1>Nossos Produtos</h1>
        <p>
          De amigurumis encantadores a roupas aconchegantes e acessórios
          estilosos, temos algo especial para todos. Confira nossa galeria de
          produtos e inspire-se!
        </p>
      </div>
    );
  };
  return (
    <>
      <section className="jobs-section">
        <div className="container flex-row row-center-verticaly space-between">
          {isMobile ? (
            <>
              <JobsProducts />
              <JobsImages />
            </>
          ) : (
            <JobsImages />
          )}
          <div className="column">
            {isMobile ? null : <JobsProducts></JobsProducts>}
            <div className="jobs-feedbacks">
              <h1>O que nossos clientes dizem</h1>
              <div className="feedbacks">
                <div className="feedback-card">
                  <img className="profile" src="/images/testimonial-1.png" />
                  <span className="username">@mynabarbosa_</span>
                  <p className="comment">
                    “Lindo, lindo e muito lindo ❤️ obrigada pela sua dedicação
                    ❤️😍”
                  </p>
                </div>
                <div className="feedback-card">
                  <img className="profile" src="/images/testimonial-2.png" />
                  <span className="username">@feltrospaloma</span>
                  <p className="comment">
                    “Uauuuuu 👏👏👏👏👏que espetáculo de trabalho 😍😍😍😍😍”
                  </p>
                </div>
                <div className="feedback-card">
                  <img className="profile" src="/images/testimonial-3.png" />
                  <span className="username">@ester_mendds</span>
                  <p className="comment">
                    “Feito entregue amado ❤️ Super amei 😍”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobsSection;
