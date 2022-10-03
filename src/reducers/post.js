import { SAVE_LATEST_POSTS } from 'src/actions/post';

export const initialState2 = {
  // ici le state initial
  latestPosts: [],
  favPosts: [],
};

function reducer(state = initialState2, action = {}) {
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
