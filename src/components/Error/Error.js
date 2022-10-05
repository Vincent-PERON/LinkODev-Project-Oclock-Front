import { Link, NavLink } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="Error">
      <h1 className="Error-title">404</h1>
      <div className="Error-content">
        <h2 className="Error-subtitle">La page que vous cherchez à été volée par Chuck Norris</h2>
        <p className="Error-description">Nous n'osons pas lui demander de nous la restituer...</p>
      </div>
    </div>
  );
}

export default Error;
