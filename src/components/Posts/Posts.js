import PropTypes from 'prop-types';
import './Posts.scss';

/* VIPE */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetLatestPosts } from 'src/actions/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import Post from 'src/components/Posts/Post/Post';
// import { initialState } from '../../reducers/post';

function Posts() {
  const dispatch = useDispatch();

  /* Les latests posts du state */
  const latestPosts = useSelector((state) => state.post.latestPosts);
  

  /*
  Au premier rendu du composant on dispatch actionGetLatestPosts
  pour que le middleware l'intercepte et aille faire la requette vers l'API pour
  recuperer les recettes
  */
  useEffect(() => {
    const action = actionGetLatestPosts(); // action => { type: 'GET_LATEST_POSTS' }
    dispatch(action);
  }, []);

  const copyToClipboard = (postID) => {
    const selectedPost = latestPosts.map((post) => {
    if (post.id === postID) {

    const message = post.introduction.content + post.body.content + post.conclusion.content;
    navigator.clipboard.writeText(message);
  }
    }); 
  };

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
            <SwiperSlide>
              <li key={post.id} className="PostCard3">
                <div className="PostCard3__container">
                  <div className="PostCard3__container__content">
                    <div className="PostCard3__container__content--contain">
                      <p className="PostCard3__container__content--text">{post.introduction.content}</p>
                      <p className="PostCard3__container__content--text">{post.body.content}</p>
                      <p className="PostCard3__container__content--text">{post.conclusion.content}</p>
                      <button className="PostCard__container__content--copyBtn" 
                              type="button"     
                              onClick={() => {
                                copyToClipboard(post.id);
                              }}>
                        Copier
                      </button>
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
