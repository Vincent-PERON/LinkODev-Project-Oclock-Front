import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './MyPosts.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function InfoProfile() {
  // accès au hook useDispatch() pour dispatcher les actions
  const dispatch = useDispatch();

  // accès au hook useNavigate pour la redirection
  const navigate = useNavigate();

  const isLogged = useSelector((state) => state.user.isLogged);
  /**
 * hook useEffect qui redirige le user vers la home au changement de isLogged = false
 */
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  });
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
          <h1 className="InfoProfile-title">MES FAVORIS</h1>
          <SeparationBar />
          MES POSTS
        </div>
      )};
    </div>
  );
}

export default InfoProfile;
