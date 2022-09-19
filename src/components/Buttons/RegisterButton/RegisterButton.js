// import { Feather } from 'react-feather';
import './RegisterButton.scss';
import logo from 'src/assets/Images/signup.gif';

function RegisterButton() {
  return (
    <div className="RegisterButton">
      <button type="button" className="RegisterButton--button">
        <img src={logo} alt="logo d'inscription" className="RegisterButton--img" />
        S'inscrire
      </button>
    </div>
  );
}

export default RegisterButton;
