import './FormGenerator.scss';
import SeparationBar from '../SeparationBar/SeparationBar';
import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';

function FormGenerator() {
  return (
    <div className="FormGenerator">
      <h1 className="FormGenerator-title">Générateur de posts LinkedIn pour les développeurs webs</h1>
      <SeparationBar />
      <h2 className="FormGenerator-subtitle">Pour poster facilement sur des sujets dev' sans prise de tête !</h2>
      <h3 className="FormGenerator-description">Pour créer votre premier post, sélectionnez les tags qui correspondent à votre envie du jour et découvrez votre résultat.</h3>
      <section className="FormGenerator-card">
        <h4 className="FormGenerator-card-title">Que voulez-vous écrire aujourd'hui ?</h4>
        <p className="FormGenerator-card-description">(plusieurs choix possibles)</p>

        <form className="FormGenerator-form">
          <div className="FormGenerator-form-group-by-3">
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                Good News
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                React
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                Prise de position
              </label>
            </div>
          </div>
          <div className="FormGenerator-form-group-by-3">
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                Design web
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                Autre catégorie
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input className="FormGenerator-checkbox" type="checkbox" />
                <span />
                Autre catégorie
              </label>
            </div>
          </div>
        </form>
      </section>
      <section className="main__container--button">
        <div className="main__container--redline" />
        <PostGenerateButton />
        <div className="main__container--redline" />
      </section>

    </div>
  );
}

export default FormGenerator;
