import { SAVE_LATEST_POSTS } from 'src/actions/post';

const initialState = {
  // ici le state initial
  latestPosts: [],
  favPosts: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_LATEST_POSTS:
      return {
        ...state,
        latestPosts: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
