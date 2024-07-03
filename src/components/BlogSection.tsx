import { MouseEvent, useEffect, useRef, useState } from "react";
import "./BlogSection.css";

function BlogSection() {
  const [selectedCard, setSelectedCard] = useState(0);
  const cardSelectionDiv = useRef<HTMLDivElement>(null);
  const cardsElement = useRef<HTMLDivElement>(null);
  let [cardWidth, setCardWidth] = useState(0);

  const handleClick = (cardSelector: MouseEvent<HTMLDivElement>) => {
    let indexOfButton = -1;

    if (cardSelectionDiv.current) {
      for (let i = 0; i < cardSelectionDiv.current.children.length; i++) {
        const a = cardSelectionDiv.current.children[i];

        if (cardSelector.target == a) {
          indexOfButton = i;
        }
      }
    }

    setSelectedCard(indexOfButton);
  };

  const showRespectiveCard = () => {
    if (cardsElement.current) {
      cardsElement.current.style.marginLeft =
        "-" + selectedCard * (cardWidth + 10) + "px";
      console.log(cardWidth);
    }
  };

  const setSelectedCardButton = () => {
    if (cardSelectionDiv.current) {
      for (let i = 0; i < cardSelectionDiv.current.children.length; i++) {
        const e = cardSelectionDiv.current.children[i];
        if (i == selectedCard) {
          e.className = "card-selection-btn selected";
        } else {
          e.className = "card-selection-btn";
        }
      }
    }
  };

  useEffect(() => {
    showRespectiveCard();
    setSelectedCardButton();
    var style = getComputedStyle(document.body);
    setCardWidth(
      parseInt(style.getPropertyValue("--general-card-width").replace("px", ""))
    );
  }, [selectedCard]);

  return (
    <section className="blog-section">
      <div className="container flex-row space-between">
        <div className="column main-column">
          <h1 className="section-title">Você Sabe Fazer Crochê?</h1>
          <p className="section-paragraph">
            Entre no nosso blog e tenha acesso a Graficos de Crochê, Tutoriais e
            Muito Mais
          </p>
          <button className="secondary-button">Veja Mais</button>
        </div>
        <div className="column cards-column">
          <div className="blog-cards">
            <div ref={cardsElement} className="cards">
              <div className="card">
                <img
                  className="post-banner"
                  src="/images/BlogPostExemple.png"
                  alt=""
                />
                <div className="info flex-row space-between">
                  <div className="text-column">
                    <h1>Quanto cobrar em meu trabalho?</h1>
                    <p>
                      Saiba quanto cobrar no seu trabalho sem perder dinheiro
                    </p>
                  </div>
                  <div className="feedback-column">
                    <div className="likes">
                      <img src="/images/like-icon.png" alt="" />
                      <span>1000</span>
                    </div>
                    <div className="comments">
                      <img src="/images/comment-icon.png" alt="" />
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="post-banner"
                  src="/images/BlogPostExemple.png"
                  alt=""
                />
                <div className="info flex-row space-between">
                  <div className="text-column">
                    <h1>Quanto cobrar em meu trabalho?</h1>
                    <p>
                      Saiba quanto cobrar no seu trabalho sem perder dinheiro
                    </p>
                  </div>
                  <div className="feedback-column">
                    <div className="likes">
                      <img src="/images/like-icon.png" alt="" />
                      <span>1000</span>
                    </div>
                    <div className="comments">
                      <img src="/images/comment-icon.png" alt="" />
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="post-banner"
                  src="/images/BlogPostExemple.png"
                  alt=""
                />
                <div className="info flex-row space-between">
                  <div className="text-column">
                    <h1>Quanto cobrar em meu trabalho?</h1>
                    <p>
                      Saiba quanto cobrar no seu trabalho sem perder dinheiro
                    </p>
                  </div>
                  <div className="feedback-column">
                    <div className="likes">
                      <img src="/images/like-icon.png" alt="" />
                      <span>1000</span>
                    </div>
                    <div className="comments">
                      <img src="/images/comment-icon.png" alt="" />
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={cardSelectionDiv} className="card-selection flex-row">
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="card-selection-btn selected"
              ></div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="card-selection-btn"
              ></div>
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className="card-selection-btn"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
