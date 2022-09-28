import PropTypes from 'prop-types';
import { useState } from 'react';

import './wrapperResultPost.scss';
import FormGenerator from '../FormGenerator/FormGenerator';
import Posts from '../Posts/Posts';
import Post from '../Posts/Post/Post';

function wrapperResultPost() {
  // tableau de tous les posts générés
  const [generatedPosts, setGeneratedPosts] = useState([]);
  // tableau contenant le dernier post généré
  const [lastGeneratedPost, setLastGeneratedPost] = useState([]);

  return (
    <div className="wrapperResultPost">
      <FormGenerator
        setGeneratedPosts={setGeneratedPosts}
        setLastGeneratedPost={setLastGeneratedPost}
      />
      {/* <Posts generatedPosts={generatedPosts} /> */}
      <Post lastGeneratedPost={lastGeneratedPost} />
    </div>
  );
}

export default wrapperResultPost;
