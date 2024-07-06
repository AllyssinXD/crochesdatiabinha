import { CSSProperties, useRef } from "react";
import "./DynamousSection.css";

const generateStyles = (
  progress: string,
  rotate: string,
  size: string
): CSSProperties =>
  ({
    "--progress": progress,
    "--color":
      (size == ("enormous" || "big") ? "#A8C1E7" : "") +
      (size == ("medium" || "small") ? "#B6E3E5" : ""),
    "--vel":
      (size == "enormous" ? "60s" : "") +
      (size == "big" ? "50s" : "") +
      (size == "medium" ? "46s" : "") +
      (size == "small" ? "30s" : ""),
    rotate,
  } as CSSProperties);

const ProgressElement = ({
  progress,
  rotate,
  size,
}: {
  progress: string;
  rotate: string;
  size: string;
}) => (
  <div
    className={`progress ${size}`}
    style={generateStyles(progress, rotate, size)}
  ></div>
);

function DynamousSection() {
  const progressbars = useRef<HTMLDivElement>(null);

  return (
    <section className="dynamous-section">
      <div className="container flex-row">
        <div ref={progressbars} className="graphics-column">
          <div className="rotating-details">
            <ProgressElement progress="20%" rotate="90deg" size="enormous" />
            <ProgressElement progress="20%" rotate="180deg" size="enormous" />
            <ProgressElement progress="35%" rotate="270deg" size="enormous" />
            <ProgressElement progress="5%" rotate="414deg" size="enormous" />

            <ProgressElement progress="20%" rotate="90deg" size="small" />
            <ProgressElement progress="20%" rotate="180deg" size="small" />
            <ProgressElement progress="35%" rotate="270deg" size="small" />
            <ProgressElement progress="5%" rotate="414deg" size="small" />

            <ProgressElement progress="20%" rotate="0deg" size="medium" />
            <ProgressElement progress="10%" rotate="78deg" size="medium" />
            <ProgressElement progress="10%" rotate="120deg" size="medium" />
            <ProgressElement progress="10%" rotate="162deg" size="medium" />
            <ProgressElement progress="10%" rotate="204deg" size="medium" />
            <ProgressElement progress="10%" rotate="246deg" size="medium" />
            <ProgressElement progress="10%" rotate="288deg" size="medium" />
            <ProgressElement progress="5%" rotate="324deg" size="medium" />
            <ProgressElement progress="1.6%" rotate="348deg" size="medium" />

            <ProgressElement progress="20%" rotate="0deg" size="big" />
            <ProgressElement progress="20%" rotate="90deg" size="big" />
            <ProgressElement progress="35%" rotate="180deg" size="big" />
            <ProgressElement progress="5%" rotate="324deg" size="big" />
          </div>
          <div className="ilustrations">
            <img
              src="/images/dynamoussoftware-background.png"
              alt=""
              className="background"
            />
            <img
              src="/images/dynamoussoftware-hands.png"
              alt=""
              className="top-layer"
            />
            <div className="popup floating one">
              <span>Store Views</span>
              <span>80%</span>
            </div>
            <div className="popup floatingtwo two">
              <span className="top">Orders in Progress</span>
              <span className="right">p.d.a</span>
              <span className="left">26.768</span>
              <span className="right">ros</span>
              <span className="left">1524</span>
            </div>
            <div className="popup floatingthree three">
              <img src="/images/bruh.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-column">
          <h1>
            Impulsione Seu Negócio com a<br></br>
            <span className="bold">Dynamous Software</span>
          </h1>
          <p>
            Somos especializados em criar sites otimizados e personalizados que
            ajudam pequenos e médios negócios a aumentar sua presença online e
            atrair mais clientes. Vamos transformar sua presença digital e
            alcançar novos patamares juntos?
          </p>
          <div className="button-row flex-row space-between">
            <button className="dynamous-button">Saiba Mais</button>
            <button className="dynamous-button">Nos Contate</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DynamousSection;
