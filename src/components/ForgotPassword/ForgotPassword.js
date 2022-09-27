import './ForgotPassword.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import SeparationBar from '../SeparationBar/SeparationBar';

function ForgotPassword() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="ForgotPassword">
      <h1 className="ForgotPassword-title">Mot de passe oublié ?</h1>
      <SeparationBar />
      <div className="ForgotPassword-content">
        <form className="ForgotPassword-form">
          <label htmlFor="email" className="ForgotPassword-form-label">EMAIL (*)</label>
          <input id="email" type="email" className="ForgotPassword-form-input" placeholder="Votre email" />
          <ReCAPTCHA
            sitekey="6LexsTAiAAAAAPsJr53ngFrh2sE50_5T0bZdiD95"
            onChange={onChange}
          />
          <div className="PostGenerateButton">
            <button type="button" className="PostGenerateButton--button">
              DEMANDER UN NOUVEAU MOT DE PASSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
