import { CHANGE_INPUT_VALUE } from 'src/actions/user';

export const initialState = {
  // ici le state initial qui concerne les users
  logged: false,
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
    default:
      return state;
  }
}

export default reducer;
