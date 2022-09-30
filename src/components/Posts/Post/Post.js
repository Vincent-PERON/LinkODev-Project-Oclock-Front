import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import './Post.scss';
import { CopyToClipBoard } from 'react-copy-to-clipboard';

function PostCard({ generatedPost }) {
  const postRef = useRef(null);

  useEffect(() => {
    postRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [generatedPost]);

  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}>
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text" type="text">{generatedPost.introduction.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.body.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.conclusion.content}</p>
            <button className="PostCard__container__content--copyBtn" type="button">Copier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  generatedPost: PropTypes.shape({
    introduction: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    conclusion: PropTypes.object.isRequired,
  }).isRequired,
};

export default PostCard;
