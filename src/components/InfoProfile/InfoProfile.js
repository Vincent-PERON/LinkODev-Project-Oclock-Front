import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  actionGetUserInfos, actionChangeInputValue, actionChangeMyEmail, actionChangeMyPassword,
} from 'src/actions/user';

import './InfoProfile.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function InfoProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // je récupère l'email et le password du state, le lastname, firstname aussi :
  const email = useSelector((state) => state.user.email);
  const newEmail = useSelector((state) => state.user.newEmail);
  const password = useSelector((state) => state.user.password);
  const newPassword = useSelector((state) => state.user.newPassword);
  const confirmPassword = useSelector((state) => state.user.confirmPassword);

  const isLogged = useSelector((state) => state.user.isLogged);

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

  const changeInputValue = (event) => {
    const newValue = event.target.value;
    const inputName = event.target.name;
    dispatch(actionChangeInputValue(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = actionChangeMyEmail();
    dispatch(action);
  };

  const changePassword = (event) => {
    event.preventDefault();
    const action = actionChangeMyPassword();
    dispatch(action);
  };

  return (
    <div className="InfoProfile">
      {!isLogged && (
      <div>
        <h1 className="InfoProfile-title">Vous êtes maintenant déconnecté</h1>
        <h2 className="InfoProfile-title">Vous allez être redirigé vers la page d'accueil. Si ce n'est pas le cas, vous pouvez cliquer
          <NavLink to="/">ICI</NavLink>
        </h2>
      </div>
      )}
      {isLogged && (
        <div>
          <h1 className="InfoProfile-title">INFORMATIONS DU COMPTE</h1>

          <SeparationBar />

          <form
            className="InfoProfile-form"
            onSubmit={handleSubmit}
          >
            <div className="InfoProfile-group InfoProfile-group-left">
              <div className="InfoProfile-group-content">
                <label htmlFor={email} className="InfoProfile-form-label">ADRESSE E-MAIL</label>
                <input
                  id={email}
                  type="my-email"
                  name="email"
                  className="InfoProfile-form-input"
                  placeholder="Email déjà enregistré"
                  value={email}
                />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor={newEmail} className="InfoProfile-form-label">NOUVEL E-MAIL</label>
                <input
                  id="my-newEmail "
                  type="email"
                  name="newEmail"
                  className="InfoProfile-form-input"
                  placeholder="Tapez votre nouvel e-mail"
                  value={newEmail}
                  onChange={changeInputValue}
                />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor={password} className="InfoProfile-form-label">MOT DE PASSE </label>
                <input
                  id="my-password"
                  type="password"
                  name="password"
                  className="InfoProfile-form-input"
                  placeholder="Mot de passe déjà enregistré"
                  value={password}
                  onChange={changeInputValue}
                />
              </div>
              <button type="submit" className="InfoProfile-button InfoProfile-button-password"> Mettre à jour mon e-mail </button>
            </div>
          </form>

          <form
            className="InfoProfile-form"
            onSubmit={changePassword}
          >
            <div className="InfoProfile-group InfoProfile-group-right">
              <div className="InfoProfile-group-content">
                <label htmlFor="password" className="InfoProfile-form-label">MOT DE PASSE ACTUEL</label>
                <input
                  id="my-old-password"
                  type="password"
                  name="password"
                  className="InfoProfile-form-input"
                  placeholder="Mot de passe déjà enregistré"
                  value={password}
                  onChange={changeInputValue}
                />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor="password" className="InfoProfile-form-label">NOUVEAU MOT DE PASSE</label>
                <input
                  id="my-new-password"
                  type="password"
                  name="newPassword"
                  className="InfoProfile-form-input"
                  placeholder="Tapez votre nouveau mot de passe"
                  value={newPassword}
                  onChange={changeInputValue}
                />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor="password" className="InfoProfile-form-label">CONFIRMATION DU MOT DE PASSE</label>
                <input
                  id="my-new-password-confirm"
                  type="password"
                  name="confirmPassword"
                  className="InfoProfile-form-input"
                  placeholder="Tapez votre nouveau mot de passe"
                  value={confirmPassword}
                  onChange={changeInputValue}
                />
              </div>
              <button type="submit" className="InfoProfile-button InfoProfile-button-password">Mettre à jour mon mot de passe</button>
            </div>
          </form>

        </div>
      )}
    </div>
  );
}

export default InfoProfile;
