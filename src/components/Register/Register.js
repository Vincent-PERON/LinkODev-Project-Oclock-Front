import { Link, NavLink, useNavigate, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './Register.scss';
import {
  actionChangeInputValue, actionSubmitRegisterForm, actionErrorConfirmPassword,
} from 'src/actions/user';
import SeparationBar from '../SeparationBar/SeparationBar';

// étapes pour gérer le register :
// Champs contrôlés du formulaire avec actionChangeInputValue et action SAVE_NEW_USER
// appel middleware API post
// condition de vérification password === confirmPassword
// condition de vérification email === unique donc n'existe pas encoore en BDD
// après l'enregistrement du nouveau compte, l'user est connected et redirigé home

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

  // je veux déterminer si oui ou non le user sera connecté
  const isLogged = useSelector((state) => state.user.isLogged);

  // je veux déterminer si le password et le confirmPassword sont identiques
  const isValid = useSelector((state) => state.user.isValid);

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
    dispatch(actionSubmitRegisterForm());
  };

  /**
 * fonction qui récupère la valeur inscrite par l'utilisateur dans l'input
 * pour modifier la valeur d'un des inputs dans le state
 * on dispatch actionChangeInputValue
 */
  const changeInputValue = (event) => {
    console.log(event.target.value);
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
                id={lastname}
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
                id={firstname}
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
                id={email}
                type="email"
                name="email"
                className="Register-form-input"
                placeholder="Votre email"
                value={email}
                onChange={changeInputValue}
              />
            </div>
            <p className="Register-form-message">{messageBack}</p>
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
                id={password}
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
                id={confirmPassword}
                type="password"
                name="confirmPassword"
                className="Register-form-input"
                placeholder="Votre mot de passe"
                value={confirmPassword}
                onChange={changeInputValue}
              />
            </div>
            <p className="Register-form-message">{message}</p>
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
