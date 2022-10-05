import './ProfileButton.scss';
import logo from '../../../assets/Images/profile.svg';

function ProfileButton() {
  return (
    <div className="ProfileButton">
      <button type="button" className="ProfileButton--button">
        <img className="ProfileButton--img" src={logo} alt="Profile_logo" />
      </button>
    </div>
  );
}

export default ProfileButton;
