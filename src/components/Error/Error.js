import { Link, NavLink } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="Error">
      <h1 className="Error-title">OUPS </h1>
      <div className="Error-content">
        <h2 className="Error-subtitle">Rien à voir ici !</h2>
        <p className="Error-description">Pour retourner à l'accueil</p>
        <NavLink className="Error-redirect" to="/">C'est par là !</NavLink>
        <div className="Error-redirect-generator">
          <NavLink className="Error-redirect-generator" to="/generator">Sinon tu peux générer un post digne de Chuck Norris</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Error;
