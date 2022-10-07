import './Posts.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

/* VIPE */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetLatestPosts, actionSaveToFavorites } from 'src/actions/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCube, Pagination, Mousewheel, Keyboard,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { initialState } from '../../reducers/post';

function Posts() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  /* Un message c'est une intro, un corps, une conclusion */
  // eslint-disable-next-line max-len
  const latestPosts = useSelector((state) => state.post.latestPosts);

  // eslint-disable-next-line max-len
  // const message = latestPosts.introduction.content + latestPosts.body.content + latestPosts.conclusion.content;

  /* Fonction copy to  clipboard */
  const copyToClipboard = (postID) => {
    const selectedPost = latestPosts.map((posts) => {
      if (posts.id === postID) {
        const message = posts.introduction.content + posts.body.content + posts.conclusion.content;
        navigator.clipboard.writeText(message);
      }
    });
  };

  /* Fonction copy to  clipboard */
  // const generatedPostFromState = useSelector((state) => state.post.generatedPost);
  const saveToFavorites = () => {
    const action = actionSaveToFavorites(); // action => { type: 'GET_MY_FAVORITES_POSTS' }
    dispatch(action);
  };

  /*
  Au premier rendu du composant on dispatch actionGetLatestPosts
  pour que le middleware l'intercepte et aille faire la requette vers l'API pour
  recuperer les recettes
  */
  useEffect(() => {
    const action = actionGetLatestPosts(); // action => { type: 'GET_LATEST_POSTS' }
    dispatch(action);
  }, []);

  // eslint-disable-next-line max-len

  return (
    <Swiper
      effect="cube"
      grabCursor
      mousewheel
      keyboard={{
        enabled: true,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.8,
      }}
      pagination
      modules={[EffectCube, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <div className="content-list">
        <ul>
          {latestPosts.map(((posts) => (
            <SwiperSlide>
              <div className="PostCard3">
                <div className="PostCard3__container">
                  <div className="PostCard3__container__content">
                    <div className="PostCard3__container__content--contain">
                      <p className="PostCard3__container__content--text">{posts.introduction.content}</p>
                      <p className="PostCard3__container__content--text">{posts.body.content}</p>
                      <p className="PostCard3__container__content--text">{posts.conclusion.content}</p>
                      <div className="PostCard__container__content--icons">
                        {isLogged && (
                        <button className="PostCard3__container__content--svBtn" type="button" onClick={saveToFavorites}>
                          <StarOutlineIcon sx={{ color: 'white', fontSize: 30 }} />
                        </button>
                        )}
                        <button
                          className="PostCard3__container__content--cpBtn"
                          type="button"
                          onClick={() => {
                            copyToClipboard(posts.id);
                          }}
                        >
                          <ContentCopyIcon sx={{ color: 'white', fontSize: 30 }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )))}
        </ul>
      </div>
    </Swiper>
  );
}

export default Posts;
