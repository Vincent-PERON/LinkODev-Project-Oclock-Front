export const GET_LATEST_POSTS = 'GET_LATEST_POSTS';
export const SAVE_LATEST_POSTS = 'SAVE_LATEST_POSTS';

export const GET_MY_FAVORITES_POSTS = 'GET_MY_FAVORITES_POSTS';
export const SAVE_MY_FAVORITES_POSTS = 'SAVE_MY_FAVORITES_POSTS';

export const actionGetLatestPosts = () => ({
  type: GET_LATEST_POSTS,
});

export const actionSaveLatestPosts = (data) => ({
  type: SAVE_LATEST_POSTS,
  data,
});

export const actionGetMyFavoritesPosts = () => ({
  type: GET_MY_FAVORITES_POSTS,
});

export const actionSaveMyFavoritesPosts = (data) => ({
  type: SAVE_MY_FAVORITES_POSTS,
  data,
});
