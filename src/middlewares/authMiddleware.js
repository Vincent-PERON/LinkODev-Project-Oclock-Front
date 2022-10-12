import axios from 'axios';
import {
  CHECK_LOGIN, actionSaveUser, 
  SUBMIT_REGISTER_FORM, actionResetRegisterForm,
  actionErrorBack, actionErrorLogin,
} from 'src/actions/user';

const API_URL = process.env.REACT_APP_API_URL;

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case CHECK_LOGIN: {  
      const { user: { email, password } } = store.getState();

      axios.post( API_URL + "/login", {
        email: email,
        password: password,
      }).then((response) => {
        store.dispatch(actionSaveUser(response.data.accessToken, response.data.user));
        localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }).catch((error) => {
        store.dispatch(actionErrorLogin(error.response.data.error));
      });

      break;
    }

    case SUBMIT_REGISTER_FORM: {
      const { user: {lastname, firstname, email, password, confirmPassword} } = store.getState();
      
        axios.post(API_URL + "/register", {
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
        store.dispatch(actionErrorBack(error.response.data.error));
      });

      break;
    }

    default:
  }

  return next(action);
};

export default authMiddleware;
