import './ForgotPassword.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function ForgotPassword() {
  return (
    <div className="ForgotPassword">
      <h1 className="ForgotPassword-title">Mot de passe oublié ?</h1>
      <SeparationBar />
      <div className="ForgotPassword-content">
        <form className="ForgotPassword-form">
          <label htmlFor="email" className="ForgotPassword-form-label">EMAIL (*)</label>
          <input id="email" type="email" className="ForgotPassword-form-input" placeholder="Votre email" />
        </form>
      </div>
      <div className="PostGenerateButton">
      <button type="button" className="PostGenerateButton--button">DEMANDER UN NOUVEAU MOT DE PASSE</button>
    </div>
    </div>
  );
}

export default ForgotPassword;
