import { NavLink } from 'react-router-dom';

import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import SeparationBar from '../SeparationBar/SeparationBar';
import Posts from '../Posts/Posts';

import './Main.scss';

function Main() {

  return (
    <div className="main__container">
      <div className="main__container__separationBar">
        <SeparationBar />
      </div>
      <section className="main__container__AboutUs">
        <p className="main__container__AboutUs--content--title">Bienvenue sur le projet LinkO'Dev !</p>
        <p className="main__container__AboutUs--content">L'idée du projet part d'un constat. En tant que développeur, junior ou non, notre présence sur LinkedIn est requise. Fortement recommandée en tous cas. Sauf qu'écrire des posts LinkedIn, c'est chronophage.</p>
        <p className="main__container__AboutUs--content">La mission de ce générateur est simple : vous permettre de choisir vos mots-clés en fonction du thème que vous souhaitez aborder, et vous générer un post tout prêt, publiable et modifiable par vos soins.</p>
        <p className="main__container__AboutUs--content">Pour profiter de toutes les fonctionnalités de ce projet, il vous suffit de créer un compte. Vous pourrez ensuite enregistrer en favoris les posts générés et les supprimer au besoin.  Amusez-vous bien ! </p>
      </section>
      <section className="main__container--button">
        <div className="main__container--redline" />
        <NavLink
          to="/generator"
        ><PostGenerateButton />
        </NavLink>
        <div className="main__container--redline" />
      </section>
      <SeparationBar />
      <section className="main__container--posts">
        <Posts />
      </section>
    </div>
  );
}

export default Main;
