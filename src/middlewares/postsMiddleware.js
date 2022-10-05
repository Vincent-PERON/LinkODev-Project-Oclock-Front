import axios from 'axios';
import { useSelector } from 'react-redux';
import {  actionSaveLatestPosts, GET_LATEST_POSTS, 
          GET_MY_FAVORITES_POSTS ,
          actionSaveMyFavoritesPosts, 
        } from 'src/actions/post';

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_LATEST_POSTS: {
      axios.get('https://linkodevapi.cyber-one.fr/posts/latest')
        .then((response) => {
        console.log('LATEST:',response.data)
          store.dispatch(actionSaveLatestPosts(response.data));
        }).catch((error) => {
          console.log('erreur', error);
          // alert('Impossible de récupérer les 3 derniers posts, veuillez réessayer');
        });

      break;
    }

    case GET_MY_FAVORITES_POSTS: {

      /* Récupération du token depuis le state */
      const { user: { token } } = store.getState();

      axios.get('https://linkodevapi.cyber-one.fr/me/posts', { headers: {"Authorization" : `Bearer ${token}`} })
        .then((response) => { 
          console.log('FAVORIS:',response.data.posts)
          store.dispatch(actionSaveMyFavoritesPosts(response.data.posts));
        }).catch((error) => {
          console.log('erreur', error);
        // alert('Impossible de récupérer les posts favoris, veuillez réessayer');
      });

      break;
    }

    default:
  }
  next(action); 
};

export default postsMiddleware;
