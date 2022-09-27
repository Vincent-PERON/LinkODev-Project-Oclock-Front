import { Link, NavLink } from 'react-router-dom';
import './Login.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function Login() {
  return (
    <div className="Login">
      <h1 className="Login-title">SE CONNECTER</h1>
      <h2 className="Login-subtitle">Pas encore inscrit ? <NavLink to="/register">S'inscrire</NavLink></h2>
      <div className="Login-separation"><SeparationBar /></div>
      <form className="Login-form">
        <div className="Login-form-group">
          <div className="Login-form-elem">
            <label htmlFor="email" className="Login-form-label">EMAIL (*)</label>
            <input id="email" type="email" className="Login-form-input" placeholder="Votre email" />
          </div>
          <div className="Login-form-elem">
            <label htmlFor="password" className="Login-form-label">MOT DE PASSE (*)</label>
            <input id="password" type="password" className="Login-form-input" placeholder="Votre mot de passe" />
          </div>
        </div>
        <section className="main__container--button">
          <div className="main__container--redline" />
          <button
            type="submit"
            className="Login-form-button"
          >
            SE CONNECTER
          </button>
          <div className="main__container--redline" />
        </section>
      </form>
      <Link to="/forgotpassword" className="Login-a">Mot de passe oublié ?</Link>
    </div>
  );
}

export default Login;
