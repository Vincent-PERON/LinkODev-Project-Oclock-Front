export const GET_LATEST_POSTS = 'GET_LATEST_POSTS';
export const SAVE_LATEST_POSTS = 'SAVE_LATEST_POSTS';

export const GET_MY_FAVORITES_POSTS = 'GET_MY_FAVORITES_POSTS';
export const SAVE_MY_FAVORITES_POSTS = 'SAVE_MY_FAVORITES_POSTS';

export const SAVE_GENERATED_POSTS = 'SAVE_GENERATED_POSTS';

export const SAVE_A_POST_IN_FAVORITES = 'SAVE_MY_FAVORITES_POSTS';

/* 
** LATEST POSTS 
*/
export const actionGetLatestPosts = () => ({
  type: GET_LATEST_POSTS,
});

export const actionSaveLatestPosts = (data) => ({
  type: SAVE_LATEST_POSTS,
  data,
});

/* 
** FAVORITES POSTS 
*/
export const actionGetMyFavoritesPosts = () => ({
  type: GET_MY_FAVORITES_POSTS,
});

export const actionSaveMyFavoritesPosts = (data) => ({
  type: SAVE_MY_FAVORITES_POSTS,
  data,
});

export const actionSaveToFavorites = (data) => ({
  type: SAVE_A_POST_IN_FAVORITES,
  data,
});

/* 
** GENERATED POSTS 
*/
export const actionSaveGeneratedPost = (data) => ({
  type: SAVE_GENERATED_POSTS,
  data,
});
