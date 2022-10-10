
import './Error.scss';

function Error() {
  return (
    <div className="Error grey">
      <p className="Error--code">404</p>
      <p className="Error--text">Il semble que vous vous soyez perdu !</p>
      <p className="Error--text--end" >Un tour sur <a href="/" className="blue">l'accueil</a> devrait vous aider à retrouver votre route.</p>
    </div>
  );
}

export default Error;
