import axios from 'axios';
import {  GET_LATEST_POSTS, actionSaveLatestPosts,
          GET_MY_FAVORITES_POSTS , actionSaveMyFavoritesPosts,
          SAVE_A_POST_IN_FAVORITES,
        } from 'src/actions/post';

import {authHeader} from "src/services/authHeader";

const API_URL = process.env.REACT_APP_API_URL;    

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_LATEST_POSTS: {
      axios.get(API_URL + "/posts/latest")
        .then((response) => {
          store.dispatch(actionSaveLatestPosts(response.data));
        }).catch((error) => {
          alert("Problème de connexion avec l'API");
        });
      break;
    }

    case GET_MY_FAVORITES_POSTS: {

      axios.get(API_URL + "/me/posts", { headers: authHeader() })
        .then((response) => { 
          store.dispatch(actionSaveMyFavoritesPosts(response.data.posts));
        }).catch((error) => { console.log('erreur', error); 
        alert("Problème de connexion avec l'API");
      });
      break;
    }


    case SAVE_A_POST_IN_FAVORITES: {
      console.log(store.getState())

      const { post: {generatedPost}} = store.getState();

      axios.post(API_URL + "/me/posts", 
          { /* Body */ 
          introductionId: generatedPost[0],
          bodyId: generatedPost[1],
          conclusionId: generatedPost[2]
          },
      
          { /*Headers */
            headers: authHeader() 
          })

        .then((response) => { 
          // alert(response);
          console.log(response);
          if (response.status === 201) {
          alert(response.data.status);
          } else {
          alert(response.data.error);
          }
        }).catch((error) => {
          console.log(error);
      });
      break;
    }

    default:
  }
  next(action); 
};

export default postsMiddleware;
