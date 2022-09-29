import Post from './Post/Post';
import frameCard from '../../../src/assets/Images/postCard.svg';

function Posts({ generatedPosts }) {

  const posts = generatedPosts.map((post) => {
    <Post key={post.id} {...post} />
  })
  console.log(generatedPosts);
  return (

    <div>
      {generatedPosts.map((post) => (
        <Post key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
