import { useState } from "react";
import "../styles/AuthenticationPages.css";
import Input from "../../../common/input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../../../common/popups/ErrorPopup";
import Sucess from "../../../common/popups/SucessPopup";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const navigate = useNavigate();

  const auth = () => {
    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + "/api/auth/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setSucess("Logado com sucesso!");
          setTimeout(() => navigate("/"), 3000);
        }
      })
      .catch((err) => {
        let message = "";
        switch (err.message) {
          case "Network Error":
            message = "Erro de Conexão do site";
        }
        setError(message);
      });

    console.log(import.meta.env.VITE_REACT_APP_BACKEND_URL);
  };

  return (
    <>
      <section className="auth-container flex-row">
        <div className="auth-wrapper flex-row">
          <div className="column image-column">
            <h1 className="image-side-title">Bem-vindo de volta!</h1>
          </div>
          <div className="column form">
            <h1>Faça Login</h1>
            <p>Bem vindo devolta! Por favor, faça login na sua conta.</p>
            <Input
              label="Nome de Usuário"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Senha"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="row space-between">
              <div className="row">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="stay-logged"
                    id="stay-logged"
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="input-label stay-logged">Lembrar de mim</span>
              </div>
              <span className="link">Esqueci minha senha</span>
            </div>
            <button className="auth-button" onClick={auth}>
              Entrar
            </button>
            <div className="sign-up-row row space-between">
              <span className="sign-up">Ainda não tem uma conta? </span>
              <span
                className="link"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Registre-se
              </span>
            </div>
          </div>
        </div>
      </section>
      {error && (
        <Error
          error={error}
          vanish_time={10000}
          onVanish={() => setError("")}
        />
      )}
      {sucess && (
        <Sucess
          sucess={sucess}
          vanish_time={10000}
          onVanish={() => setError("")}
        />
      )}
    </>
  );
}
