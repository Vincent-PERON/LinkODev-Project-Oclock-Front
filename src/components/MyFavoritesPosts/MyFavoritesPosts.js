import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './MyFavoritesPosts.scss';

import { actionGetMyFavoritesPosts } from 'src/actions/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y, EffectCoverflow,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import ProfilSeparationBar from '../ProfilSeparationBar/ProfilSeparationBar';

function MyFavoritesPosts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const action = actionGetMyFavoritesPosts(); // action => { type: 'GET_MY_FAVORITES_POSTS' }
    dispatch(action);
  }, []);

  const favoritesPosts = useSelector((state) => state.post.favoritesPosts);
  console.log('STATE FAVORIS:', favoritesPosts);

  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  });

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
          <ProfilSeparationBar>
            <p>MES POSTS</p>
          </ProfilSeparationBar>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={25}
            // slidesPerView={3}
            scrollbar={{ draggable: true }}
          >

            <section className="favorites__container swiper-container">
              <ul className="swiper-wrapper">
                {favoritesPosts.map(((post) => (
                  <SwiperSlide>
                    <div className="PostCardFav swiper-slide">
                      <div className="PostCardFav__container">
                        <div className="PostCardFav__container__content">
                          <div className="PostCardFav__container__content--contain">
                            <p className="PostCardFav__container__content--text">{post.introduction.content}</p>
                            <p className="PostCardFav__container__content--text">{post.body.content}</p>
                            <p className="PostCardFav__container__content--text">{post.conclusion.content}</p>
                            <button className="PostCard__container__content--copyBtn" type="button">Copier</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )))}
              </ul>
            </section>
          </Swiper>

        </div>
      )}
    </div>
  );
}

export default MyFavoritesPosts;