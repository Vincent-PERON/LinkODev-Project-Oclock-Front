import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Post.scss';

function PostCard({ generatedPost }) {
  const postRef = useRef(null);
  const isLogged = useSelector((state) => state.user.isLogged);

  // si l'user est logged, on veut qu'il puisse enregistrer son generatedPost en favori
  // au click sur le bouton enregistrer, on veut
  // enregistre le post concerné dans le favPosts du reducer/post
  // appel API ok pour GET_MY_FAVORITES_POSTS pour récupérer les favPosts sur le profile
  // du user
  // 

  /* Un message c'est une intro, un corps, une conclusion */
  // eslint-disable-next-line max-len
  const message = generatedPost.introduction.content + generatedPost.body.content + generatedPost.conclusion.content;

  /* Fonction copy to  clipboard */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    console.log(message);
  };

  useEffect(() => {
    postRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [generatedPost]);

  return (
    <div className="PostCard">
      {!isLogged && (
      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}>
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text">{generatedPost.introduction.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.body.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.conclusion.content}</p>
            <button className="PostCard__container__content--copyBtn" type="button" onClick={copyToClipboard}>Copier</button>
          </div>
        </div>
      </div>
      )}
      {isLogged && (
      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}>
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text">{generatedPost.introduction.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.body.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.conclusion.content}</p>
            <button className="PostCard__container__content--copyBtn" type="button" onClick={copyToClipboard}>Copier</button>
            <button className="PostCard__container__content--copyBtn" type="submit">Enregistrer</button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

PostCard.propTypes = {
  generatedPost: PropTypes.shape({
    introduction: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    conclusion: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
