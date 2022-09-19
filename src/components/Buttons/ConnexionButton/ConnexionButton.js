import './ConnexionButton.scss';
import test from 'src/assets/Images/connexion.gif';

function ConnexionButton() {
  return (
    <div className="ConnexionButton">
      <button
        type="button"
        className="ConnexionButton--button"
      >
        Se Connecter
      </button>
    </div>
  );
}

export default ConnexionButton;
