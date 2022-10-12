import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProfilSeparationBar from '../ProfilSeparationBar/ProfilSeparationBar';

import { actionGetMyFavoritesPosts } from 'src/actions/post';

/* Materiel UI Icons */
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import './MyFavoritesPosts.scss';

/* Swiper.JS */
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Keyboard,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

function MyFavoritesPosts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const action = actionGetMyFavoritesPosts();
    dispatch(action);
  }, []);

  const favoritesPosts = useSelector((state) => state.post.favoritesPosts);
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  });

  /* Copy to  clipboard */
  const copyToClipboard = (postID) => {
    const selectedPost = favoritesPosts.map((post) => {
      if (post.id === postID) {
        const message = post.introduction.content + post.body.content + post.conclusion.content;
        navigator.clipboard.writeText(message);
      }
    });
  };

  return (
    <div className="InfoProfile">
      {!isLogged && (
        <div>
          <h1 className="InfoProfile-title">Vous êtes maintenant déconnecté</h1>
          <h2 className="InfoProfile-title">Vous allez être redirigé vers la page d'accueil. Si ce n'est pas le cas, vous pouvez cliquer  <NavLink to="/">Ici</NavLink></h2>
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
            mousewheel
            keyboard={{
              enabled: true,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            // eslint-disable-next-line max-len
            modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, A11y]}
            spaceBetween={25}
            scrollbar={{ draggable: true }}
            className="myFavoritePost--Swiper"
          >

            <section className="favorites__container swiper-container">
              <ul className="swiper-wrapper">
                {(favoritesPosts && favoritesPosts.length != 0)
                  ? favoritesPosts.map(((post) => (
                    <SwiperSlide key={post.id}>
                      <div className="PostCardFav swiper-slide">
                        <div className="PostCardFav__container">
                          <div className="PostCardFav__container__content">
                            <div className="PostCardFav__container__content--contain">
                              <p className="PostCardFav__container__content--text">{post.introduction.content}</p>
                              <p className="PostCardFav__container__content--text">{post.body.content}</p>
                              <p className="PostCardFav__container__content--text">{post.conclusion.content}</p>
                              <div className="PostCardFav__container__content--icons">
                                <button
                                  className="PostCardFav__container__content--copyBtn"
                                  type="button"
                                  onClick={() => {
                                    copyToClipboard(post.id);
                                  }}
                                >
                                  <ContentCopyIcon
                                    sx={{ color: 'white', fontSize: 30 }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )))
                  : <p className="Message">Vous n'avez pas encore de posts enregistrés en favoris.</p>}
              </ul>
            </section>
          </Swiper>

        </div>
      )}
    </div>
  );
}

export default MyFavoritesPosts;
