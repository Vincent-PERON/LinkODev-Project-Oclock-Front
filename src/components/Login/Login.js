import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <h1 className="Login-title">Créer un nouveau compte</h1>
      <h2 className="Login-subtitle">Déjà inscrit ? <a>Se Connecter</a></h2>
      <form className="Login-form">
        <div className="Login-form-group">
          <section className="Login-form-section">
            <div className="Login-form-elem">
              <label htmlFor="name" className="Login-form-label">NOM</label>
              <input id="name" type="text" className="Login-form-input" placeholder="Votre nom" />
            </div>
            <div className="Login-form-elem">
              <label htmlFor="firstname" className="Login-form-label">PRENOM</label>
              <input id="firstname" type="text" className="Login-form-input" placeholder="Votre prénom" />
            </div>
            <div className="Login-form-elem">
              <label htmlFor="email" className="Login-form-label">EMAIL (*)</label>
              <input id="email" type="email" className="Login-form-input" placeholder="Votre email" />
            </div>
          </section>
          <section className="Login-form-section">
            <div className="Login-form-elem">
              <label htmlFor="password" className="Login-form-label">MOT DE PASSE (*)</label>
              <input id="password" type="password" className="Login-form-input" placeholder="Votre mot de passe" />
            </div>
            <div className="Login-form-elem">
              <label htmlFor="password-confirm" className="Login-form-label">CONFIRMER VOTRE MOT DE PASSE (*)</label>
              <input id="password-confirm" type="password" className="Login-form-input" placeholder="Votre mot de passe" />
            </div>
          </section>
        </div>
        <button
          type="submit"
          className="Login-form-button"
        >
          S'INSCRIRE
        </button>
      </form>
      <p className="Login-p">Les champs avec(*) sont obligatoires</p>
    </div>
  );
}

export default Login;
