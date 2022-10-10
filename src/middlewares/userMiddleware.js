// import axios from 'axios';
// import { GET_USER_INFOS, actionSaveEmailUser } from 'src/actions/user';

// import {authHeader} from "src/services/authHeader";

// const API_URL = process.env.REACT_APP_API_URL;

// const userMiddleware = (store) => (next) => (action) => {
//   switch (action.type) {

//     case GET_USER_INFOS: {
//       axios.get(API_URL + "/me", 
//           { /*Headers */
//             headers: authHeader() 
//           })

//         .then((response) => { 
//           store.dispatch(actionSaveEmailUser(response.data.email));
//         }).catch((error) => {
//           alert(error.message);
//       });
//       break;
//     }

//     default:
//   }

//   return next(action);
// };

// export default userMiddleware;
