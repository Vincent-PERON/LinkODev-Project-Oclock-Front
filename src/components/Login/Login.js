import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './Login.scss';
import { actionChangeInputValue, actionCheckLogin } from 'src/actions/user';
import SeparationBar from '../SeparationBar/SeparationBar';

function Login() {
  // accès au hook useDispatch() pour dispatcher les actions
  const dispatch = useDispatch();

  // accès au hook useNavigate pour la redirection
  const navigate = useNavigate();

  // je récupère l'email et le password du state :
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  // je veux déterminer si oui ou non le user sera connecté
  const isLogged = useSelector((state) => state.user.isLogged);

  /**
 * hook useEffect qui redirige le user vers la home au changement de isLogged = true
 */
  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  });

  /**
 * fonction au submit du form qui dispatch l'actionCheckLogin pour interroger
 * l'API et vérifier que password et email sont valides grâce à une requête post
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCheckLogin());
    console.log(actionCheckLogin());
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
    <div className="Login">
      {isLogged && (
      <div className="Login-logged">
        <h1 className="Login-title">BIENVENUE</h1>
        <h2 className="Login-subtitle">Vous allez être redirigé vers la page d'accueil. Si ce n'est pas le cas, vous pouvez cliquer  <NavLink to="/">ICI</NavLink></h2>
      </div>
      )}
      {!isLogged && (
      <><h1 className="Login-title">SE CONNECTER</h1>
        <h2 className="Login-subtitle">Pas encore inscrit ? <NavLink to="/register">S'inscrire</NavLink></h2>
        <div className="Login-separation"><SeparationBar /></div>
        <form
          className="Login-form"
          onSubmit={handleSubmit}
        >
          <div className="Login-form-group">
            <div className="Login-form-elem">
              <label
                htmlFor={email}
                className="Login-form-label"
              >EMAIL (*)
              </label>
              <input
                id={email}
                type="email"
                name="email"
                className="Login-form-input"
                placeholder="Votre email"
                value={email}
                onChange={changeInputValue}
              />
            </div>
            <div className="Login-form-elem">
              <label
                htmlFor="password"
                className="Login-form-label"
              >MOT DE PASSE (*)
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="Login-form-input"
                placeholder="Votre mot de passe"
                value={password}
                onChange={changeInputValue}
              />

              />
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
          <Link to="/forgotpassword" className="Login-a">Mot de passe oublié ?</Link>
        </form>
      </>
      )}
    </div>
  );
}

export default Login;
