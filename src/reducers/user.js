import { CHANGE_INPUT_VALUE, SAVE_USER, LOG_OUT } from 'src/actions/user';

export const initialState = {
  // ici le state initial qui concerne les users
  isLogged: false,
  email: '',
  password: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      // changer la valeur d'un input dans le state
      // l'input concerné c'est action.inputName (email ou password)
      // la nouvelle valeur c'est action.newValue (whatTheUserIsWriting)
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case SAVE_USER:
      // on sauvegarde le token de l'utilisateur, et il passe en isLogged: true
      return {
        ...state,
        isLogged: true,
        token: action.token,
        // on vide les inputs dans le state une fois connecté
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    default:
      return state;
  }
}

export default reducer;
