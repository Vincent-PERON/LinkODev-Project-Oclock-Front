import { useSelector, useDispatch } from 'react-redux';
import './LogOutButton.scss';
import { actionLogOut } from 'src/actions/user';
import { logOut } from 'src/services/authJWT';

function LogOutButton() {
  const dispatch = useDispatch();

  return (
    <div className="LogOutButton">
      <button
        type="submit"
        className="LogOutButton--button"
        onClick={() => {
          dispatch(actionLogOut());
          logOut();
        }}
      >
        Me Déconnecter
      </button>
    </div>
  );
}

export default LogOutButton;
