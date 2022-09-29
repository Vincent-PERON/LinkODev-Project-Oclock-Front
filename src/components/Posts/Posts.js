import Post from './Post/Post';

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
