import './InfoProfile.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function InfoProfile() {
  return (
    <div className="InfoProfile">
      <h1 className="InfoProfile-title">INFORMATIONS DU COMPTE</h1>
      <SeparationBar />
      <form className="InfoProfile-form">
        <div className="InfoProfile-group InfoProfile-group-left">
          <div className="InfoProfile-group-content">
            <label htmlFor="email" className="InfoProfile-form-label">ADRESSE E-MAIL</label>
            <input id="email" type="email" className="InfoProfile-form-input" placeholder="Email déjà enregistré" />
          </div>
          <div className="InfoProfile-group-content">
            <label htmlFor="email" className="InfoProfile-form-label">NOUVEL E-MAIL</label>
            <input id="new-email" type="email" className="InfoProfile-form-input" placeholder="Tapez votre nouvel e-mail" />
          </div>
          <button className="InfoProfile-button InfoProfile-button-mail" type="button">Mettre à jour mon e-mail</button>
        </div>
        <div className="InfoProfile-group InfoProfile-group-right">
          <div className="InfoProfile-group-content">
            <label htmlFor="password" className="InfoProfile-form-label">MOT DE PASSE ACTUEL</label>
            <input id="password" type="password" className="InfoProfile-form-input" placeholder="Mot de passe déjà enregistré" />
          </div>
          <div className="InfoProfile-group-content">
            <label htmlFor="password" className="InfoProfile-form-label">NOUVEAU MOT DE PASSE</label>
            <input id="new-password" type="password" className="InfoProfile-form-input" placeholder="Tapez votre nouveau mot de passe" />
          </div>
          <div className="InfoProfile-group-content">
            <label htmlFor="password" className="InfoProfile-form-label">CONFIRMATION DU MOT DE PASSE</label>
            <input id="new-password-confirm" type="password" className="InfoProfile-form-input" placeholder="Tapez votre nouveau mot de passe" />
          </div>
          <button className="InfoProfile-button" type="button">Mettre à jour mon mot de passe</button>
        </div>
      </form>
    </div>
  );
}

export default InfoProfile;
