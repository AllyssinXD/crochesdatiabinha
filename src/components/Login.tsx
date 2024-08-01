import "./AuthPage.css";

function Login() {
  return (
    <>
      <section className="auth-container flex-row">
        <div className="auth-wrapper flex-row">
          <div className="column image-column">
            <h1 className="image-side-title">Bem-vindo de volta!</h1>
          </div>
          <div className="column">
            <form action="/authenticate" method="get">
              <h1>Faça Login</h1>
              <p>Bem vindo devolta! Por favor, faça login na sua conta.</p>
              <span className="input-label">Nome de Usuário</span>
              <input
                type="text"
                name="username"
                id="username"
                className="text-input"
              />
              <span className="input-label">Senha</span>
              <input
                type="password"
                name="password"
                id="password"
                className="text-input"
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
                  <span className="input-label stay-logged">
                    Lembrar de mim
                  </span>
                </div>
                <span className="link">Esqueci minha senha</span>
              </div>
              <button className="auth-button" type="submit">
                Entrar
              </button>
              <div className="sign-up-row row space-between">
                <span className="sign-up">Ainda não tem uma conta? </span>
                <span className="link">Registre-se</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
