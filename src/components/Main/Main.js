import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import SeparationBar from '../SeparationBar/SeparationBar';
import Posts from '../Posts/Posts';
import './Main.scss';

function Main() {
  // on veut récupérer les 3 derniers posts route /posts/latest enregistrés dans le state.posts
  // pour boucler dessus et les afficher
  // const latestPosts = useSelector((state) => state.posts.latestPosts);

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
      {/* <section className="main__container--posts">
        <Posts />
      </section> */}
    </div>
  );
}

export default Main;
