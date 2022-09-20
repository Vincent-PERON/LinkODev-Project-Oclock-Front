import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import './Main.scss';

function Main() {
  return (
    <div className="main__container">
      <div className="main__container--redline" />
      <PostGenerateButton />
      <div className="main__container--redline" />
    </div>
  );
}

export default Main;
