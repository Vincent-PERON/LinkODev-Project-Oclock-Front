import { NavLink } from 'react-router-dom';

import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import SeparationBar from '../SeparationBar/SeparationBar';
import Post from '../Posts/Post/Post';
import './Main.scss';

function Main() {
  return (
    <div className="main__container">
      <section className="main__container--button">
        <div className="main__container--redline" />
        <NavLink
          to="/generator"
        ><PostGenerateButton />
        </NavLink>
        <div className="main__container--redline" />
      </section>
      <SeparationBar />
    </div>
  );
}

export default Main;
