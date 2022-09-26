/* eslint-disable no-const-assign */
import './Post.scss';
import logo from '../../../assets/Images/copyIcon.png';

function PostCard() {
  const lettersLength = 100;
  const textContent = document.getElementsByClassName('PostCard__container__content--intro');

  if (textContent) {
    const hiddenText = textContent.innerHTML;
    if (hiddenText.length > lettersLength) {
      hiddenText = hiddenText.substring(0, lettersLength);
      hiddenText = hiddenText.replace(/\w+$/, '...');
      hiddenText += '<a href="#">Lire la suite </a>';
      textContent.innerHTML = hiddenText;
    }
  }
  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" id="1">
          <section className="PostCard__container__content--intro" id="10">Certains débats entre dev’ font couler bcp d’encre virtuelle… Parmi les plus connus, 2 ou 4 espaces pour l’indentation, Javascript ou PHP, faut-il utiliser Redux avec React, ou encore, doit-on créer nos propres Hook avec React ? Chacun a son avis. De grandes et petites questions qui s’affrontent pour l’amour du code 😊 Voyons ça de plus près…</section>
          <section className="PostCard__container__content--body" id="1">Je commence par le point le plus important de tous. Le choix du langage évidemment !
            PHP ou Javascript, les 2 sont clairement très demandés en entreprise.
            Alors, si vous voulez approfondir vos
            connaissances dans l’un des 2,
            lequel devriez-vous choisir ? Ou pour choisir votre premier langage, lequel privilégier?
            PHP ou Javascript, les 2 sont clairement très demandés en entreprise.
            connaissances dans l’un des 2,
            lequel devriez-vous choisir ? Ou pour choisir votre premier langage, lequel privilégier?
            PHP ou Javascript, les 2 sont clairement très demandés en entreprise.
            connaissances dans l’un des 2,
            lequel devriez-vous choisir ? Ou pour choisir votre premier langage, lequel privilégier?
            PHP ou Javascript, les 2 sont clairement très demandés en entreprise.
            HP ou Javascript, les 2 sont clairement très demandés en entreprise.
            connaissances dans l’un des 2,
            lequel devriez-vous choisir ? Ou pour choisir votre premier langage, lequel privilégier?
            PHP ou Javascript, les 2 sont clairement très demandés en entreprise.
            connaissances dans l’un des 2,
          </section>
          <section className="PostCard__container__content--conclusion" id="1">Comme il peu probable que vous meniez votre carrière de développeur sans toucher aux deux solutions, et que le débat déchaine les passions, je vous laisse vous exprimer en commentaire ↓</section>
        </div>
        <img className="PostCard__container--copyLogo" src={logo} alt="Copy" />
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
