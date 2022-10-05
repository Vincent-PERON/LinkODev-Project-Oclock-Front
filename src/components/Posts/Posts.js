import PropTypes from 'prop-types';
import './Posts.scss';

/* VIPE */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetLatestPosts } from 'src/actions/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Post from 'src/components/Posts/Post/Post';
// import { initialState } from '../../reducers/post';

function Posts() {
  const dispatch = useDispatch();
  /*
  Au premier rendu du composant on dispatch actionGetLatestPosts
  pour que le middleware l'intercepte et aille faire la requette vers l'API pour
  recuperer les recettes
  */
  useEffect(() => {
    const action = actionGetLatestPosts(); // action => { type: 'GET_LATEST_POSTS' }
    dispatch(action);
  }, []);

  const latestPosts = useSelector((state) => state.post.latestPosts);

  // eslint-disable-next-line max-len

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
    >
      <div className="content-list">
        <ul>
          {latestPosts.map(((post) => (
            <SwiperSlide>
              <div className="PostCard3">
                <div className="PostCard3__container">
                  <div className="PostCard3__container__content">
                    <div className="PostCard3__container__content--contain">
                      <p className="PostCard3__container__content--text">{post.introduction.content}</p>
                      <p className="PostCard3__container__content--text">{post.body.content}</p>
                      <p className="PostCard3__container__content--text">{post.conclusion.content}</p>
                      <button className="PostCard__container__content--copyBtn" type="button">Copier</button>
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
