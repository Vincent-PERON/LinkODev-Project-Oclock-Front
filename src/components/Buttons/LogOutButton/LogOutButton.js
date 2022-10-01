import { useSelector, useDispatch } from 'react-redux';
import './LogOutButton.scss';
import { actionLogOut } from 'src/actions/user';

function LogOutButton() {
  const dispatch = useDispatch();

  return (
    <div className="LogOutButton">
      <button
        type="submit"
        className="LogOutButton--button"
        onClick={() => {
          dispatch(actionLogOut());
        }}
      >
        
        Me Déconnecter
      </button>
    </div>
  );
}

export default LogOutButton;
