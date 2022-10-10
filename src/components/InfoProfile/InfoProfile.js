import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { actionGetUserInfos, actionChangeInputValue, actionChangeMyEmail } from 'src/actions/user';

import './InfoProfile.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function InfoProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

// je récupère l'email et le password du state, le lastname, firstname aussi :
const lastname = useSelector((state) => state.user.lastname);
const email = useSelector((state) => state.user.email);
const newEmail = useSelector((state) => state.user.newEmail);
const password = useSelector((state) => state.user.password);


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
  console.log(event.target.value);
  const newValue = event.target.value;
  const inputName = event.target.name;
  dispatch(actionChangeInputValue(newValue, inputName));
};

const handleSubmit = (event) => {
  event.preventDefault();
  const action = actionChangeMyEmail();
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
                    type="email" 
                    name="email"
                    className="InfoProfile-form-input" 
                    placeholder="Email déjà enregistré"  
                    value={email} 
                    />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor={newEmail} className="InfoProfile-form-label">NOUVEL E-MAIL</label>
                  <input 
                    id={newEmail} 
                    type="email" 
                    name='newEmail'
                    className="InfoProfile-form-input" 
                    placeholder="Tapez votre nouvel e-mail" 
                    value={newEmail}
                    onChange={changeInputValue} 
                    />
              </div>
              <div className="InfoProfile-group-content">
                <label htmlFor={password} className="InfoProfile-form-label">MOT DE PASSE </label>
                  <input 
                    id={password} 
                    type="password" 
                    name='password'
                    className="InfoProfile-form-input" 
                    placeholder="Mot de passe déjà enregistré" 
                    value={password} 
                    onChange={changeInputValue} 
                    />
              </div>
              <button type="submit" className="InfoProfile-button InfoProfile-button-password" > Mettre à jour mon e-mail </button>
            </div>
          </form>


          <form className="InfoProfile-form">
            <div className="InfoProfile-group InfoProfile-group-right">
              <div className="InfoProfile-group-content">
                <label htmlFor="password" className="InfoProfile-form-label">MOT DE PASSE ACTUEL</label>
                <input id="password-old" type="password" className="InfoProfile-form-input" placeholder="Mot de passe déjà enregistré" />
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
      )}
    </div>
  );
}

export default InfoProfile;
