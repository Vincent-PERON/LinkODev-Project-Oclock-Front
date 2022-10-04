import axios from 'axios';
import {
  CHECK_LOGIN, actionSaveUser, SUBMIT_REGISTER_FORM, actionResetRegisterForm,
} from 'src/actions/user';
import { actionErrorBack } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      /*
      on va faire l'appel API  avec envoi à /login en back le email + password
      on récupère le state géré par le reducer user.js
      on doit récupérer : le token pour enregistrer la session user + le firstname pour msg profil
      */
      const { user: { email, password } } = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/login', {
        email: email,
        password: password,
      }).then((response) => {
        console.log('response', response.data);
        /*
        if user connected, il faut changer isLogged en true dans le state
        on save le JSON WebToken récupéré dans le state, et le firstname de data.user
        */
        store.dispatch(actionSaveUser(response.data.accessToken, response.data.user));
      }).catch((error) => {
        console.log('erreur', error);
        alert('Le mot de passe ou l\'email sont invalides, veuillez réessayer');
      });

      break;
    }
    case SUBMIT_REGISTER_FORM: {
      /*
      on va faire l'appel API  avec envoi à /register en back les infos du user :
      lastname, firstname, email, password
      */
      const {
        user: {
          lastname, firstname, email, password, confirmPassword,
        },
      } = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/register', {
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        // mettre en option une condition checkbox pour se connecter automatiquement
      }).then((response) => {
        console.log('response', response, response.data.error);
        // sous condition if, connecter automatiquement l'utilisateur
        // store.dispatch(actionSaveUser(response.accessToken));
        // ici, on veut simplement envoyer les infos au back pour enregistrement et supprimer
        // les infos du state pour sécuriser l'app
        store.dispatch(actionResetRegisterForm());
        store.dispatch(actionErrorBack(response.data.error));
      }).catch((error) => {
        console.log('erreur', error, error.response.data.error);
        store.dispatch(actionErrorBack(error.response.data.error));
        alert('erreur de chargement axios.post route/register, veuillez réessayer');
      });

      break;
    }

    default:
  }

  return next(action);
};

export default authMiddleware;
