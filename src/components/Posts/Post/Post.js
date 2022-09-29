import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
/* eslint-disable no-const-assign */
import './Post.scss';
import logo from '../../../assets/Images/copyIcon.png';

function PostCard({ generatedPost }) {
  const postRef = useRef(null);

  useEffect(() => {
    postRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [generatedPost]);

  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}> {generatedPost.content}
          <img className="PostCard__container--copyLogo" src={logo} alt="Copy" />
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  generatedPost: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
