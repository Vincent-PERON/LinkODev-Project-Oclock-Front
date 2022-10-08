import { useState } from 'react';

import FormGenerator from '../FormGenerator/FormGenerator';
import Post from '../Posts/Post/Post';

import './wrapperResultPost.scss';

function WrapperResultPost() {
  // l'objet du dernier post généré
  const [generatedPost, setGeneratedPost] = useState(null);

  return (
    <div className="WrapperResultPost">
      <FormGenerator
        setGeneratedPost={setGeneratedPost}
      />
      {generatedPost && (
        <Post generatedPost={generatedPost} />
      )}
    </div>
  );
}

export default WrapperResultPost;
