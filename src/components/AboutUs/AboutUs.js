import './AboutUs.scss';
import imgEstelle from 'src/assets/Images/ERE.png';
import imgVincent from 'src/assets/Images/VPN.png';
import imgLoic from 'src/assets/Images/LPT.png';
import imgAlexandre from 'src/assets/Images/AJY.png';

function AboutUs() {
  return (
    <div className="AboutUs">
      <h1 className="AboutUs-title">à propos</h1>
      <p className="AboutUs-description">Bienvenue sur le projet LinkO'Dev !</p>
      <p className="AboutUs-description">L'idée du projet part d'un constat. En tant que développeurs, junior ou non, notre présence sur LinkedIn est requise. Fortement recommandée en tous cas. Sauf qu'écrire des posts LinkedIn, c'est chronophage et pénible pour la plupart d'entre nous.</p>
      <p className="AboutUs-description">La mission de ce générateur est simple : vous permettre de choisir vos mots-clés en fonction du thème que vous souhaitez aborder, et vous générer un post tout prêt, publiable et modifiable par vos soins.</p>
      <p className="AboutUs-description">Pour profiter de toutes les options de ce projet, créez-vous un compte : vous pourrez enregistrer vos posts créés et les supprimer au besoin. Dans les versions suivantes, vous pourrez aussi les modifier, et même prévoir un calendrier de publication ! Amusez-vous bien ! </p>
      <h2 className="AboutUs-title">L'équipe</h2>
      <section className="AboutUs-cards">
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgEstelle} alt="photo Estelle" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Estelle Rozée</h3>
            <p className="AboutUs-card-content-role">Product owner</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgVincent} alt="photo Vincent" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Vincent Péron</h3>
            <p className="AboutUs-card-content-role">Scrum / Git Master</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgLoic} alt="photo Loic" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Loïc Picart</h3>
            <p className="AboutUs-card-content-role">Lead Dev' Front</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgAlexandre} alt="photo Alexandre" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Alexandre Jouany</h3>
            <p className="AboutUs-card-content-role">Lead Dev' Back</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
