
/* eslint-disable no-const-assign */
import './Post.scss';
import logo from '../../../assets/Images/copyIcon.png';
import ReadMoreReadLess from '../ReadMoreReadLess/ReadMoreReadLess';

function PostCard() {
  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" id="1">
            <ReadMoreReadLess
              limit={850}
              className={"PostCard__container__content--text"}
            >
              Certains débats entre dev’ font couler bcp d’ encre virtuelle… Parmi les plus connus, 2 ou 4 espaces pour l’ indentation, Javascript ou PHP, faut - il utiliser Redux avec React, ou encore, doit - on créer nos propres Hooks avec React ? Chacun a son avis.De grandes et petites questions qui s’ affrontent pour l’ amour du code😊 Voyons ça de plus près…
              React est une librairie JS qui me passionne, et à juste titre je pense.Les possibilités sont infinies… Et les hésitations aussi!
                Tous les morceaux que l’ on code deviennent réutilisables, tels de magnifiques Lego.Et ces Lego que l’ on peut imbriquer de façons différentes, sont fabriqués avec des composants et des sous - composants.
              Pour la conception, de multiples choix sont envisageables.J’ aimerais me pencher aujourd’ hui sur une nouveauté de React 16.8: les Hooks.Merveille du développement web(j’ exagère moi, vraiment ? ), ils permettent de se passer des composants en forme de classe, qui, disons - le tout de suite, sont lourds à écrire.Alors qu’ en encapsulant nos fonctionnalités complexes dans des fonctions, on peut réutiliser cette logique dans plusieurs composants.
              React propose déjà des Hooks essentiels, comme useState, useEffect ou encore useRef.Par conséquent, pourquoi créer nos propres Hooks ?
                Vous l’ avez compris, je suis totalement pour créer nos propres Hooks React, dès qu’ on réutilise les mêmes lignes de code plus de 2 fois dans des composants différents.
              Vous adorez le principe mais vous ne savez par où commencer ? Vous pouvez retrouver des exemples de Hooks sur le site de https : //usehooks.com/
                Pour autant, les possibilités offertes par React sont très importantes, et les manières de coder également.Que préférez - vous faire de votre côté, que ce soit sur vos projets personnels ou sur vos projets professionnels ? ↓
            </ReadMoreReadLess>
          <img className="PostCard__container--copyLogo" src={logo} alt="Copy" />
        </div>
      </div>
      <div className="PostCard__container">
        <section className="PostCard__container--intro" id="2">La Créativité</section>
        <section className="PostCard__container--body" id="2">C'est l'intelligence</section>
        <section className="PostCard__container--conclusion" id="2">Qui s'amuse</section>
        <img className="PostCard__container--copyLogo" src={logo} alt="Copy" />
      </div>
      <div className="PostCard__container">
        <section className="PostCard__container--intro" id="3">La Créativité</section>
        <section className="PostCard__container--body" id="3">C'est l'intelligence</section>
        <section className="PostCard__container--conclusion" id="3">Qui s'amuse</section>
        <img className="PostCard__container--copyLogo" src={logo} alt="Copy" />
      </div>
    </div>
  );
}

export default PostCard;
