import PropTypes from 'prop-types';

/* VIPE */ 
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetLatestPosts } from 'src/actions/post';

 import Post from 'src/components/Posts/Post/Post';
// import { initialState } from '../../reducers/post';


function Posts() {
  const dispatch = useDispatch();
  /*
  Au premier rendu du composant on dispatch actionGetLatestPosts
  pour que le middleware l'intercepte et aille faire la requette vers l'APInpour recuperer les recettes
  */
  useEffect(() => {
    const action = actionGetLatestPosts(); // action => { type: 'GET_LATEST_POSTS' }
    dispatch(action);
  }, []);

const latestPosts = useSelector((state) => state.post.latestPosts);

  return (
    <div className="content-list">
      <ul>
        {latestPosts.map((post => (
          <div className="PostCard">
      <div className="PostCard__container">
        <div className="PostCard__container__content" >
          <div className="PostCard__container__content--contain">
            <p className="PostCard__container__content--text">{post.introduction.content}</p>
            <p className="PostCard__container__content--text">{post.body.content}</p>
            <p className="PostCard__container__content--text">{post.conclusion.content}</p>
            {/* <button className="PostCard__container__content--copyBtn" type="button" onClick={copyToClipboard}>Copier</button> */}
          </div>
        </div>
      </div>
    </div>
        )))}
      </ul>
      </div>
  );
}

Posts.propTypes = {
  latestPosts: PropTypes.arrayOf({
    introduction: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    conclusion: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
