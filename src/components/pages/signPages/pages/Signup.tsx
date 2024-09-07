import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <>
      <section className="auth-container flex-row">
        <div className="auth-wrapper flex-row">
          <div className="column image-column">
            <h1 className="image-side-title">Olá!</h1>
          </div>
          <div className="column">
            <form action="/create-user" method="get">
              <h1>Registre-se</h1>
              <p>Novo por aqui? Preencha o formulário e faça sua conta.</p>
              <span className="input-label">Nome de Usuário</span>
              <input
                type="text"
                name="username"
                id="username"
                className="text-input"
              />

              <span className="input-label">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="text-input"
              />

              <span className="input-label">Senha</span>
              <input
                type="password"
                name="password"
                id="password"
                className="text-input"
              />
              <div className="sign-up-row row space-between">
                <span className="sign-up">Já tem uma conta? </span>
                <span
                  className="link"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Faça Login
                </span>
              </div>
              <button className="auth-button" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
