import { SAVE_LATEST_POSTS, SAVE_MY_FAVORITES_POSTS } from 'src/actions/post';

const initialState = {
  latestPosts: [],
  favoritesPosts: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_LATEST_POSTS:
      return {
        ...state,
        latestPosts: action.data,
      };

      case SAVE_MY_FAVORITES_POSTS:
      return {
        ...state,
        favoritesPosts: action.data,
      };


    default:
      return state;
  }
}

export default reducer;
