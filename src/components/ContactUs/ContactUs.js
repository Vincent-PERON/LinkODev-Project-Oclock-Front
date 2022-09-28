import './ContactUs.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

function ContactUs() {
  return (
    <div className="ContactUs">
      <h1 className="ContactUs-title">Contactez-nous</h1>
      <div className="ContactUs-separation"><SeparationBar /></div>
      <p className="ContactUs-description">Bienvenue sur le projet LinkO'Dev !</p>
      <p className="ContactUs-description">Vous souhaitez nous contacter pour une idée de contenu, pour une question, ou simplement pour nous envoyer un message plein d'amour, vous pouvez utiliser le formulaire suivant. Nous vous recontacterons dès que possible.</p>

      <form className="ContactUs-form">
        <div className="ContactUs-form-group">
          <section className="ContactUs-form-section">
            <div className="ContactUs-form-elem">
              <label htmlFor="name" className="ContactUs-form-label">NOM</label>
              <input id="name" type="text" className="ContactUs-form-input" placeholder="Votre nom" />
            </div>
            <div className="ContactUs-form-elem">
              <label htmlFor="firstname" className="ContactUs-form-label">PRENOM</label>
              <input id="firstname" type="text" className="ContactUs-form-input" placeholder="Votre prénom" />
            </div>
            <div className="ContactUs-form-elem">
              <label htmlFor="email" className="ContactUs-form-label">EMAIL (*)</label>
              <input id="email" type="email" className="ContactUs-form-input" placeholder="Votre email" />
            </div>
          </section>
          <section className="ContactUs-form-section">
            <div className="ContactUs-form-elem">
              <label htmlFor="text" className="ContactUs-form-label">VOTRE MESSAGE</label>
              <textarea id="text" type="textarea" className="ContactUs-form-input ContactUs-form-input-textarea" placeholder="Ecrivez ici votre message" />
            </div>
          </section>
        </div>
        <section className="main__container--button">
          <div className="main__container--redline" />
          <button
            type="submit"
            className="Register-form-button"
          >
            ENVOYER
          </button>
          <div className="main__container--redline" />
        </section>
        <p className="Register-p">Les champs avec(*) sont obligatoires</p>
      </form>
    </div>
  );
}

export default ContactUs;
