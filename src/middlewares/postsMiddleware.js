import axios from 'axios';
import { actionSaveLatestPosts, GET_LATEST_POSTS } from 'src/actions/post';

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LATEST_POSTS: {
      /*
      on veut faire l'appel API  pour récupérer les 3 derniers posts de la route /posts/latest
      */
      axios.get('https://linkodevapi.cyber-one.fr/posts/latest')
        .then((response) => {
          
          /*
        On veut enregistrer le contenu des posts dans le state des posts
        */
        store.dispatch(actionSaveLatestPosts(response.data));
        }).catch((error) => {
          console.log('erreur', error);
          alert('Impossible de récupérer les 3 derniers posts, veuillez réessayer');
        });

      break;
    }

    default:
  }
  next(action);  // vipe retrait du "return"
};

export default postsMiddleware;
