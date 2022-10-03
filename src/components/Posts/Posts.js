import PropTypes from 'prop-types';

/* VIPE */ 
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetLatestPosts } from 'src/actions/post';

// import Post from 'src/components/Posts/Post/Post';
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

  // const latestPosts = useSelector((state) => state.posts.latestPosts);

  return (

    <div>
      {/* latestPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))  */}
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
