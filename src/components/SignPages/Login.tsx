import { useState } from "react";
import "./AuthPage.css";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function auth() {
    axios
      .post(
        "https://crochesdatiabinha-backend-production.up.railway.app/api/auth/login",
        {
          username: username,
          password: password,
        }
      )
      .then((response) => {
        if (response.data.token) {
          //salva token
          navigate("/");
        }
      })
      .catch((err) => {
        navigate("/login?err=" + err);
        console.log({ err, password, username });
      });
  }

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
              <span className="link">Registre-se</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
