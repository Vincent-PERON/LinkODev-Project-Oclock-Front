import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';
import postsMiddleware from 'src/middlewares/postsMiddleware';

import reducer from '../reducers';

// on construit un enhancer avec à la fois dev tool et le/les middlewares
const composedEnhancers = composeWithDevTools(applyMiddleware(postsMiddleware, authMiddleware));

const store = createStore(
  // le reducer
  reducer,
  // les devtools + le middleware
  composedEnhancers,
);

export default store;
