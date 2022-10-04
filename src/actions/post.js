export const GET_LATEST_POSTS = 'GET_LATEST_POSTS';
export const SAVE_LATEST_POSTS = 'SAVE_LATEST_POSTS';

export const GET_FAV_POSTS = 'GET_FAV_POSTS';
export const SAVE_FAV_POSTS = 'SAVE_FAV_POSTS';

export const actionGetLatestPosts = () => ({
  type: GET_LATEST_POSTS,
});

export const actionSaveLatestPosts = (data) => ({
  type: SAVE_LATEST_POSTS,
  data,
});

export const actionGetFavPosts = () => ({
  type: GET_FAV_POSTS,
});

export const actionSaveFavPosts = (data) => ({
  type: SAVE_FAV_POSTS,
  data,
});
