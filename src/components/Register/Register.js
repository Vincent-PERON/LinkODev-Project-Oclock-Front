import './Register.scss';

function Register() {
  return (
    <div className="Register">
      <h1 className="Register-title">SE CONNECTER</h1>
      <h2 className="Register-subtitle">Pas encore inscrit ? <a>S'inscrire</a></h2>
      <form className="Register-form">
        <div className="Register-form-group">
            <div className="Register-form-elem">
              <label htmlFor="email" className="Register-form-label">EMAIL (*)</label>
              <input id="email" type="email" className="Register-form-input" placeholder="Votre email" />
            </div>
            <div className="Register-form-elem">
              <label htmlFor="password" className="Register-form-label">MOT DE PASSE (*)</label>
              <input id="password" type="password" className="Register-form-input" placeholder="Votre mot de passe" />
            </div>
        </div>
        <button
          type="submit"
          className="Register-form-button"
        >
          SE CONNECTER
        </button>
      </form>
      <a className="Register-a">Mot de passe oublié ?</a>
    </div>
  );
}

export default Register;
