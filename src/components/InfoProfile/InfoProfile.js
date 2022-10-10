import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actionGetUserInfos } from 'src/actions/user';

import './InfoProfile.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function InfoProfile() {
  // accès au hook useDispatch() pour dispatcher les actions
  const dispatch = useDispatch();

  // accès au hook useNavigate pour la redirection
  const navigate = useNavigate();

  const isLogged = useSelector((state) => state.user.isLogged);
  const emailValue= useSelector((state) => state.user.email);
  /**
 * hook useEffect qui redirige le user vers la home au changement de isLogged = false
 */
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  });

/* Get infos at component render */
useEffect(() => {
  const action = actionGetUserInfos(); 
  dispatch(action);
}, []);


  return (
    <div className="InfoProfile">
      {!isLogged && (
      <div>
        <h1 className="InfoProfile-title">Vous êtes maintenant déconnecté</h1>
        <h2 className="InfoProfile-title">Vous allez être redirigé vers la page d'accueil. Si ce n'est pas le cas, vous pouvez cliquer  <NavLink to="/">ICI</NavLink></h2>
      </div>
      )}
      {isLogged && (
        <div>
          <h1 className="InfoProfile-title">INFORMATIONS DU COMPTE</h1>
          <SeparationBar />
          <form className="InfoProfile-form">
            <div className="InfoProfile-group InfoProfile-group-left">
              <div className="InfoProfile-group-content">
                <label htmlFor="email" className="InfoProfile-form-label">ADRESSE E-MAIL</label>
                <input id="email" type="email" value={emailValue} className="InfoProfile-form-input" placeholder="Email déjà enregistré" />
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
              <button className="InfoProfile-button InfoProfile-button-password" type="button">Mettre à jour mon mot de passe</button>
            </div>
          </form>
        </div>
      )};
    </div>
  );
}

export default InfoProfile;
