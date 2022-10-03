import axios from 'axios';
import { CHECK_LOGIN, actionSaveUser, REGISTER_NEW_USER } from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      /*
      on va faire l'appel API  avec envoi à /login en back le email + password
      on récupère le state géré par le reducer user.js
      */
      const { user: { email, password } } = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/login', {
        email: email,
        password: password,
      }).then((response) => {
        console.log('response', response);
        /*
        if user connected, il faut changer isLogged en true dans le state
        on save le JSON WebToken dans le state ou localStorage (mémoire navigateur)
        On recupère aussi un JWT : JSON Web Token
        */
        store.dispatch(actionSaveUser(response.accessToken));
        // à vérifier pour la réception du token
      }).catch((error) => {
        console.log('erreur', error);
        alert('erreur de chargement axios.post route/login, veuillez réessayer');
      });

      break;
    }
    // A RETRAVAILLER
    case REGISTER_NEW_USER: {
      /*
      on va faire l'appel API  avec envoi à /register en back les infos du user :
      lastname, firstname, email, password
      */
      const {
        user: {
          lastname, firstname, email, password,
        },
      } = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/register', {
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
      }).then((response) => {
        console.log('response', response);
        /*
        if user créé et connecté, il faut changer isLogged en true dans le state
        on save le JSON WebToken dans le state ou localStorage (mémoire navigateur)
        peut-on récupérer directement un JWT : JSON Web Token pour passer le user en connected ????
        */
        store.dispatch(actionSaveUser(response.accessToken));
        // à vérifier pour la réception du token
      }).catch((error) => {
        console.log('erreur', error);
        alert('erreur de chargement axios.post route/register, veuillez réessayer');
      });

      break;
    }

    default:
  }

  return next(action);
};

export default authMiddleware;
