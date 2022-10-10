import axios from 'axios';
import { GET_USER_INFOS, actionSaveEmailUser, CHANGE_MY_EMAIL} from 'src/actions/user';

import {authHeader} from "src/services/authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_USER_INFOS: {
      axios.get(API_URL + "/me", 
          { /*Headers */
            headers: authHeader() 
          })

        .then((response) => { 
          store.dispatch(actionSaveEmailUser(response.data.email));
        }).catch((error) => {
          alert(error.message);
      });
      break;
    }

    case CHANGE_MY_EMAIL: {

      const { user: {email, newEmail, password, } } = store.getState();

      axios.put(API_URL + "/me", 
          { /* Body */ 
          email: email,
          password: password,
          update: {
                    email: newEmail
                }
          },
      
          { /*Headers */
            headers: authHeader() 
          })

        .then((response) => { 
          console.log(response.data.msg);
        }).catch((error) => {
          alert(error.message);
      });
      break;
    }

    default:
  }

  return next(action);
};

export default userMiddleware;
