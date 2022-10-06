import axios from 'axios';
import {
  CHECK_LOGIN, actionSaveUser, 
  SUBMIT_REGISTER_FORM, actionResetRegisterForm,
  actionErrorBack,
} from 'src/actions/user';


const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {

      const { user: { email, password } } = store.getState();

      axios.post('https://linkodevapi.cyber-one.fr/login', {
        email: email,
        password: password,
      }).then((response) => {
        store.dispatch(actionSaveUser(response.data.accessToken, response.data.user));
        localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }).catch((error) => {
        console.log('erreur', error);
        alert('Le mot de passe ou l\'email sont invalides, veuillez réessayer');
      });

      break;
    }
    case SUBMIT_REGISTER_FORM: {

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

      }).then((response) => {
        store.dispatch(actionResetRegisterForm());
        store.dispatch(actionErrorBack(response.data.error));
        action.successCallback();
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
