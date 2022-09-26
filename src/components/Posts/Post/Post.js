import './Post.scss';
import logo from '../../../assets/Images/copyIcon.png';

function PostCard() {
  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <section className="PostCard__container--intro" id="1">La Créativité</section>
        <section className="PostCard__container--body" id="1">C'est l'intelligence</section>
        <section className="PostCard__container--conclusion" id="1">Qui s'amuse</section>
        <img src={logo} alt="Copy" />
      </div>
      <div className="PostCard__container">
        <section className="PostCard__container--intro" id="2">La Créativité</section>
        <section className="PostCard__container--body" id="2">C'est l'intelligence</section>
        <section className="PostCard__container--conclusion" id="2">Qui s'amuse</section>
        <img src={logo} alt="Copy" />
      </div>
      <div className="PostCard__container">
        <section className="PostCard__container--intro" id="3">La Créativité</section>
        <section className="PostCard__container--body" id="3">C'est l'intelligence</section>
        <section className="PostCard__container--conclusion" id="3">Qui s'amuse</section>
        <img src={logo} alt="Copy" />
      </div>
    </div>
  );
}

export default PostCard;
