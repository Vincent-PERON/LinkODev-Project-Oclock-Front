import PropTypes from 'prop-types';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Post.scss';
import { CopyToClipBoard } from 'react-copy-to-clipboard';

function PostCard({ generatedPost }) {
  const postRef = useRef(null);
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const onChange = React.useCallback(({ target: { value } }) => {
    setValue(value);
    setCopied(copied);
  }, []);

  const onCopy = React.useCallback(() => {
    setCopied(true);
  }, []);

  useEffect(() => {
    postRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [generatedPost]);

  return (
    <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" ref={postRef}>
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text" type="text" value={value} onChange={onChange}>{generatedPost.introduction.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.body.content}</p>
            <p className="PostCard__container__content--text">{generatedPost.conclusion.content}</p>
            <CopyToClipBoard onCopy={onCopy} text={value}>
              <button className="PostCard__container__content--copyBtn" type="button">Copier</button>
            </CopyToClipBoard>
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
