import axios from 'axios';
import {  GET_LATEST_POSTS, actionSaveLatestPosts,
          GET_MY_FAVORITES_POSTS , actionSaveMyFavoritesPosts,
          SAVE_A_POST_IN_FAVORITES,
        } from 'src/actions/post';


const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_LATEST_POSTS: {
      axios.get('https://linkodevapi.cyber-one.fr/posts/latest')
        .then((response) => {
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

      axios.get('https://linkodevapi.cyber-one.fr/me/posts', { 
          headers: {"Authorization" : `Bearer ${token}`} 
        })
        .then((response) => { 
          store.dispatch(actionSaveMyFavoritesPosts(response.data.posts));
        }).catch((error) => { console.log('erreur', error); // alert('Impossible de récupérer les posts favoris, veuillez réessayer');
      });
      break;
    }


    case SAVE_A_POST_IN_FAVORITES: {

      /* Récupération du token depuis le state */
      const { user: { token } } = store.getState();
      const { post: {generatedPost}} = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/me/posts', 
          { /* Body */ 
          introductionId: generatedPost[0],
          bodyId: generatedPost[1],
          conclusionId: generatedPost[2]
          },
      
          { /* Headers */
              headers: {"Authorization" : `Bearer ${token}`},
          })
        .then((response) => { 
          console.log(response);
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
