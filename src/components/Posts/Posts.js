import Post from './Post/Post';

function Posts({ generatedPosts }) {
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
