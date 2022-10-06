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
        <p className="main__container__AboutUs--content">Bienvenue sur le projet LinkO'Dev !</p>
        <p className="main__container__AboutUs--content">L'idée du projet part d'un constat. En tant que développeurs, junior ou non, notre présence sur LinkedIn est requise. Fortement recommandée en tous cas. Sauf qu'écrire des posts LinkedIn, c'est chronophage et pénible pour la plupart d'entre nous.</p>
        <p className="main__container__AboutUs--content">La mission de ce générateur est simple : vous permettre de choisir vos mots-clés en fonction du thème que vous souhaitez aborder, et vous générer un post tout prêt, publiable et modifiable par vos soins.</p>
        <p className="main__container__AboutUs--content">Pour profiter de toutes les fonctionnalités de ce projet, créez-vous un compte : vous pourrez enregistrer vos posts créés et les supprimer au besoin. Dans les versions suivantes, vous pourrez aussi les modifier, et même prévoir un calendrier de publication ! Amusez-vous bien ! </p>
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
