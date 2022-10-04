import { CHANGE_INPUT_VALUE, SAVE_USER, LOG_OUT, REGISTER_NEW_USER, ERROR_CONFIRM_PASSWORD } from 'src/actions/user';

export const initialState = {
  // ici le state initial qui concerne les users
  isLogged: false,
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  confirmPassword: '',
  // Name for Backend = "apitoken"
  token: null,
  // to check password and confirmPassword
  isValid: true,
  message: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      // changer la valeur d'un input dans le state
      // l'input concerné c'est action.inputName (email, password, confirmPassword,
      // lastname ou firstname)
      // la nouvelle valeur c'est action.newValue (whatTheUserIsWriting)
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case SAVE_USER:
      // on sauvegarde le token de l'utilisateur, et il passe en isLogged: true
      // on sauvegarde aussi le firstname renvoyé pour msg de bienvenue
      return {
        ...state,
        isLogged: true,
        firstname: action.firstname,
        token: action.token,
        // on vide les inputs dans le state une fois connecté, à voir car redirect
        // email: '',
        // password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    case REGISTER_NEW_USER: // RESET_REGISTER_FORM => vider les infos du user
      // on sauvegarde les infos du nouvel user : nom, prénom, email, mot de passe
      return {
        ...state,
        // lastname: action.lastname,
        // firstname: action.firstname,
        // email: action.email,
        // password: action.password,
        // on vide les inputs dans le state une fois connecté
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    case ERROR_CONFIRM_PASSWORD:
      return {
        ...state,
        isLogged: false,
        isValid: false,
        message: 'Les mots de passe ne correspondent pas',
      };
    default:
      return state;
  }
}

export default reducer;
