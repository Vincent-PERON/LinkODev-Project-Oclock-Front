import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import './Post.scss';

function PostCard({ generatedPost }) {
  const postRef = useRef(null);


 /* Un message c'est une intro, un corps, une conclusion */
  const message = generatedPost.introduction.content + generatedPost.body.content + generatedPost.conclusion.content

 /* Fonction copy to  clipboard */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message)
    console.log(message)
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
          <button className="PostCard__container__content--copyBtn" type="button" onClick={copyToClipboard} >Copier</button>
          </div>
        </div>
      </div>
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
