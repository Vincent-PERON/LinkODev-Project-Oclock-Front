import {
  CHANGE_INPUT_VALUE, SAVE_USER, LOG_OUT, RESET_REGISTER_FORM, ERROR_CONFIRM_PASSWORD, ERROR_BACK,
} from 'src/actions/user';

const userToken = JSON.parse(localStorage.getItem('accessToken'));

const loginCondition = userToken ? true : false;


export const initialState = {
  // ici le state initial qui concerne les users
  isLogged: loginCondition,
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
  messageBack: '',
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
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    case RESET_REGISTER_FORM:
      // on sauvegarde les infos du nouvel user : nom, prénom, email, mot de passe
      return {
        ...state,
        // on vide les inputs dans le state une fois la requête envoyée sur la route /register
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
    case ERROR_BACK:
      // on sauvegarde le message d'erreur pour l'afficher à l'utilisateur
      return {
        ...state,
        isLogged: false,
        messageBack: action.messageBack,
      };
    default:
      return state;
  }
}

export default reducer;
