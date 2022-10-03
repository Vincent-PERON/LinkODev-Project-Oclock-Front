import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Post from 'src/components/Posts/Post/Post';

function Posts() {
  // component de la page d'accueil avec les 3 derniers posts :
  // route get /posts/latest déjà prévue en back donc requête axios via postsMiddleware

  const latestPosts = useSelector((state) => state.posts.latestPosts);

  console.log(latestPosts);
  return (

    <div>
      {latestPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
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
