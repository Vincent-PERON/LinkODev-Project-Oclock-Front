import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetLatestPosts, actionSaveToFavorites } from 'src/actions/post';

/* Materiel UI Icons */
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

/* Swiper.JS*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Mousewheel, Keyboard} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Posts.scss';

function Posts() {

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const latestPosts = useSelector((state) => state.post.latestPosts);


  /* Copy to  clipboard */
  const copyToClipboard = (postID) => {
    const selectedPost = latestPosts.map((post) => {
      if (post.id === postID) {
        const message = post.introduction.content + post.body.content + post.conclusion.content;
        navigator.clipboard.writeText(message);
      }
    });
  };

  /* Save to favorites */
  const saveToFavorites = () => {
    const action = actionSaveToFavorites(); 
    dispatch(action);
  };

  /* First component render */
  useEffect(() => {
    const action = actionGetLatestPosts(); 
    dispatch(action);
  }, []);

  return (
    <Swiper
      effect="cube"
      grabCursor
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.5,
      }}
      pagination
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <div className="content-list">
        <ul>
          {latestPosts.map(((post) => (
            <SwiperSlide key={post.id} >
              <li key={post.id} className="PostCard3">
                <div className="PostCard3__container">
                  <div className="PostCard3__container__content">
                    <div className="PostCard3__container__content--contain">
                      <p className="PostCard3__container__content--text">{post.introduction.content}</p>
                      <p className="PostCard3__container__content--text">{post.body.content}</p>
                      <p className="PostCard3__container__content--text">{post.conclusion.content}</p>
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
                            copyToClipboard(post.id);
                          }}
                        >
                          <ContentCopyIcon sx={{ color: 'white', fontSize: 30 }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          )))}
        </ul>
      </div>
    </Swiper>
  );
}

export default Posts;
