import { useState } from 'react';

import FormGenerator from '../FormGenerator/FormGenerator';
import Post from '../Posts/Post/Post';

import './wrapperResultPost.scss';

function WrapperResultPost() {
  // l'objet du dernier post généré
  const [generatedPost, setGeneratedPost] = useState(null);

  return (
    <div className="WrapperResultPost">
      <div className="WrapperResultPost--form">
        <FormGenerator
          setGeneratedPost={setGeneratedPost}
        />
      </div>
      <div className="WrapperResultPost--post">
        {generatedPost && (
        <Post generatedPost={generatedPost} />
        )}
      </div>
    </div>
  );
}

export default WrapperResultPost;
