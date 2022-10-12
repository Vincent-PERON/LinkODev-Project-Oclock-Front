import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Register.scss';
import {
  actionChangeInputValue, actionSubmitRegisterForm, actionErrorConfirmPassword,
} from 'src/actions/user';
import SeparationBar from '../SeparationBar/SeparationBar';

function Register() {
  // accès au hook useDispatch() pour dispatcher les actions
  const dispatch = useDispatch();

  // accès au hook useNavigate pour la redirection
  const navigate = useNavigate();

  // je récupère l'email et le password du state, le lastname, firstname aussi :
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const confirmPassword = useSelector((state) => state.user.confirmPassword);
  const message = useSelector((state) => state.user.message);
  const messageBack = useSelector((state) => state.user.messageBack);

  /**
 * fonction au submit du form qui dispatch l'actionResetRegisterForm pour supprimer les
 * infos précédemment envoyées au back via la requête /register de l'authMiddleware
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    // au submit du form, error if confirmPassword !== password
    if (password !== confirmPassword) {
      return dispatch(actionErrorConfirmPassword());
    }
    dispatch(actionSubmitRegisterForm(() => navigate('/login')));
  };

  /**
 * fonction qui récupère la valeur inscrite par l'utilisateur dans l'input
 * pour modifier la valeur d'un des inputs dans le state
 * on dispatch actionChangeInputValue
 */
  const changeInputValue = (event) => {
    const newValue = event.target.value;
    const inputName = event.target.name;
    dispatch(actionChangeInputValue(newValue, inputName));
  };

  return (
    <div className="Register">
      <h1 className="Register-title">Créer un nouveau compte</h1>
      <h2 className="Register-subtitle">Déjà inscrit ? <NavLink to="/login">Se Connecter</NavLink></h2>
      <div className="Register-separation"><SeparationBar /></div>
      <form
        className="Register-form"
        onSubmit={handleSubmit}
      >
        <div className="Register-form-group">
          <section className="Register-form-section">
            <div className="Register-form-elem">
              <label
                htmlFor={lastname}
                className="Register-form-label"
              >
                NOM (*)
              </label>
              <input
                id="register-lastname"
                type="text"
                name="lastname"
                className="Register-form-input"
                placeholder="Votre nom"
                value={lastname}
                onChange={changeInputValue}
              />
            </div>
            <div className="Register-form-elem">
              <label
                htmlFor={firstname}
                className="Register-form-label"
              >
                PRENOM (*)
              </label>
              <input
                id="register-firstname"
                type="text"
                name="firstname"
                className="Register-form-input"
                placeholder="Votre prénom"
                value={firstname}
                onChange={changeInputValue}
              />
            </div>
            <div className="Register-form-elem">
              <label
                htmlFor={email}
                className="Register-form-label"
              >
                EMAIL (*)
              </label>
              <input
                id="register-email"
                type="email"
                name="email"
                className="Register-form-input"
                placeholder="Votre email"
                value={email}
                onChange={changeInputValue}
              />
            </div>
          </section>
          <section className="Register-form-section">
            <div className="Register-form-elem">
              <label
                htmlFor={password}
                className="Register-form-label"
              >
                MOT DE PASSE (*)
              </label>
              <input
                id="register-password"
                type="password"
                name="password"
                className="Register-form-input"
                placeholder="Votre mot de passe"
                value={password}
                onChange={changeInputValue}
              />
            </div>
            <div className="Register-form-elem">
              <label
                htmlFor={confirmPassword}
                className="Register-form-label"
              >
                CONFIRMER VOTRE MOT DE PASSE (*)
              </label>
              <input
                id="register-confirmPwd"
                type="password"
                name="confirmPassword"
                className="Register-form-input"
                placeholder="Votre mot de passe"
                value={confirmPassword}
                onChange={changeInputValue}
              />
            </div>
          </section>
        </div>
        <p className="Register-form-message">{message}</p>
        <p className="Register-form-message">{messageBack}</p>
        <section className="register__container--button">
          <div className="register__container--redline" />
          <button
            type="submit"
            className="Register-form-button"
          >
            S'INSCRIRE
          </button>
          <div className="register__container--redline" />
        </section>
      </form>
      <p className="Register-p">Les champs avec(*) sont obligatoires</p>
    </div>
  );
}

export default Register;
