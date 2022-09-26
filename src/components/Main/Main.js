import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import SeparationBar from '../SeparationBar/SeparationBar';
import Post from '../Posts/Post/Post';
import './Main.scss';

function Main() {
  return (
    <div className="main__container">
      <section className="main__container--button">
        <div className="main__container--redline" />
        <PostGenerateButton />
        <div className="main__container--redline" />
      </section>
      <SeparationBar />
      <Post />
    </div>
  );
}

export default Main;
