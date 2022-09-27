import { Link, NavLink } from 'react-router-dom';
import './Register.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function Register() {
  return (
    <div className="Register">
      <h1 className="Register-title">Créer un nouveau compte</h1>
      <h2 className="Register-subtitle">Déjà inscrit ? <NavLink to="/login">Se Connecter</NavLink></h2>
      <div className="Register-separation"><SeparationBar /></div>
      <form className="Register-form">
        <div className="Register-form-group">
          <section className="Register-form-section">
            <div className="Register-form-elem">
              <label htmlFor="name" className="Register-form-label">NOM</label>
              <input id="name" type="text" className="Register-form-input" placeholder="Votre nom" />
            </div>
            <div className="Register-form-elem">
              <label htmlFor="firstname" className="Register-form-label">PRENOM</label>
              <input id="firstname" type="text" className="Register-form-input" placeholder="Votre prénom" />
            </div>
            <div className="Register-form-elem">
              <label htmlFor="email" className="Register-form-label">EMAIL (*)</label>
              <input id="email" type="email" className="Register-form-input" placeholder="Votre email" />
            </div>
          </section>
          <section className="Register-form-section">
            <div className="Register-form-elem">
              <label htmlFor="password" className="Register-form-label">MOT DE PASSE (*)</label>
              <input id="password" type="password" className="Register-form-input" placeholder="Votre mot de passe" />
            </div>
            <div className="Register-form-elem">
              <label htmlFor="password-confirm" className="Register-form-label">CONFIRMER VOTRE MOT DE PASSE (*)</label>
              <input id="password-confirm" type="password" className="Register-form-input" placeholder="Votre mot de passe" />
            </div>
          </section>
        </div>
        <section className="main__container--button">
          <div className="main__container--redline" />
          <button
            type="submit"
            className="Register-form-button"
          >
            S'INSCRIRE
          </button>
          <div className="main__container--redline" />
        </section>
      </form>
      <p className="Register-p">Les champs avec(*) sont obligatoires</p>
    </div>
  );
}

export default Register;
