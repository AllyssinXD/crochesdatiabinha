import { useNavigate } from "react-router-dom";
import "./Maintenance.css";

function Maintenance() {
  const navigate = useNavigate();

  const toLandingPage = () => {
    navigate("/");
  };

  return (
    <div className="maintenance-error">
      <img src="/images/error-image.jpeg" className="error-rotating-image" />
      <h1>Desculpe, esta página está em manutenção</h1>
      <p>
        O site Crochês da Tia Binha ainda está sendo desenvolvido, por isso o
        acesso ao blog e a loja virtual é restrito para desenvolvedores. Se
        quiser saber quando estas funcionalidades estiverem disponiveis ao
        publico, nos siga nas redes sociais e fique ligado nas novidades!
      </p>
      <button onClick={toLandingPage} className="secondary-button">
        Voltar para o Site
      </button>
    </div>
  );
}

export default Maintenance;
