import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionSaveToFavorites } from 'src/actions/post';

import './Post.scss';

function PostCard({ generatedPost }) {
  const dispatch = useDispatch();

  const postRef = useRef(null);
  const isLogged = useSelector((state) => state.user.isLogged);

  /* Un message c'est une intro, un corps, une conclusion */
  // eslint-disable-next-line max-len
  const message = generatedPost.introduction.content + generatedPost.body.content + generatedPost.conclusion.content;

  /* Fonction copy to  clipboard */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    console.log(message);
  };

   /* Fonction copy to  clipboard */
  // const generatedPostFromState = useSelector((state) => state.post.generatedPost);
  const saveToFavorites = () => {
  const action = actionSaveToFavorites(); // action => { type: 'GET_MY_FAVORITES_POSTS' }
  dispatch(action);
  };

  useEffect(() => {
    postRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [generatedPost]);

  return (
    <div className="PostCard">

      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}>
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text">{generatedPost.introduction.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.body.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.conclusion.content}</p>
            <button className="PostCard__container__content--copyBtn" type="button" onClick={copyToClipboard}>Copier</button>

            {isLogged && (
              <button className="PostCard__container__content--saveBtn" type="button" onClick={saveToFavorites}>Enregistrer</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  generatedPost: PropTypes.shape({
    introduction: PropTypes.shape({
        content: PropTypes.string.isRequired,}),

    body: PropTypes.shape({
        content: PropTypes.string.isRequired,}),

    conclusion: PropTypes.shape({
        content: PropTypes.string.isRequired,}),
        
  }).isRequired,
};

export default PostCard;
