import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Login.scss';
import { actionChangeInputValue } from 'src/actions/user';
import SeparationBar from '../SeparationBar/SeparationBar';

function Login() {
  // accès au hook useDispatch() pour dispatcher les actions
  const dispatch = useDispatch();

  // je récupère l'email et le password du state :
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  // Au submit du formulaire, on veut interroger l'API pour vérifier que password et email
  // existent et sont valides grâce à une requête post
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Au changement à l'écriture dans l'input, je veux récupérer la valeur puis l'enregistrer
  // pour comparer state.user.email à event.target.value.email et idem password
  // pour modifier la valeur d'un des inputs dans le state
  // on dispatch actionChangeInputValue
  const changeInputValue = (event) => {
    const newValue = event.target.value;
    const inputName = event.target.name;
    dispatch(actionChangeInputValue(newValue, inputName));
  };

  return (
    <div className="Login">
      <h1 className="Login-title">SE CONNECTER</h1>
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
      </form>
      <Link to="/forgotpassword" className="Login-a">Mot de passe oublié ?</Link>
    </div>
  );
}

export default Login;
