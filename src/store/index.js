import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';
import postsMiddleware from 'src/middlewares/postsMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from '../reducers';

// on construit un enhancer avec à la fois dev tool et le/les middlewares

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// VIPE const composedEnhancers = composeWithDevTools(applyMiddleware(postsMiddleware, authMiddleware));

const middlewareEnhancer = applyMiddleware(
  // les actions passerons dans les middleware dans l'ordre indiqué ici:
  postsMiddleware,
  authMiddleware,
  userMiddleware,
);

const enhancers = composeEnhancers(
  applyMiddleware(),
  middlewareEnhancer,
);

const store = createStore(
  // le reducer
  reducer,
  // les devtools + le middleware
  enhancers,
);

export default store;
