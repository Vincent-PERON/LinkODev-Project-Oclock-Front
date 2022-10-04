import { useNavigate, NavLink,} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './MyFavoritesPosts.scss';
import SeparationBar from '../SeparationBar/SeparationBar';

import { actionGetMyFavoritesPosts } from 'src/actions/post';

import favorites from 'src/data/favorites'


function MyFavoritesPosts() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const action = actionGetMyFavoritesPosts(); // action => { type: 'GET_MY_FAVORITES_POSTS' }
    dispatch(action);
  }, []);

  // const favoritesPosts = useSelector((state) => state.post.latestPosts);
  // console.log('favoris:' , favoritesPosts)


  const isLogged = useSelector((state) => state.user.isLogged);
  /**
  * hook useEffect qui redirige le user vers la home au changement de isLogged = false
  */
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  });

  const favoritesPosts = favorites.posts

  return (
    <div className="InfoProfile">
      {!isLogged && (
      <div>
        <h1 className="InfoProfile-title">Vous êtes maintenant déconnecté</h1>
        <h2 className="InfoProfile-title">Vous allez être redirigé vers la page d'accueil. Si ce n'est pas le cas, vous pouvez cliquer  <NavLink to="/">ICI</NavLink></h2>
      </div>
      )}
      {isLogged && (
        <div>
          <h1 className="InfoProfile-title">MES FAVORIS</h1>
          <SeparationBar />

          <section className="favorites__container">
                <ul>
                  {favoritesPosts.map(((post) => (
                    <div className="PostCardFav">
                      <div className="PostCardFav__container">
                        <div className="PostCardFav__container__content">
                          <div className="PostCardFav__container__content--contain">
                            <p className="PostCardFav__container__content--text">{post.introduction.content}</p>
                            <p className="PostCardFav__container__content--text">{post.body.content}</p>
                            <p className="PostCardFav__container__content--text">{post.conclusion.content}</p>
                            {/* <button className="PostCard__container__content--copyBtn" type="button">Copier</button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )))}
                </ul>
          </section>

        </div>
      )}
    </div>
  )
}

export default MyFavoritesPosts;
