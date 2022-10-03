import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';

import reducer from '../reducers';

// on construit un enhancer avec à la fois dev tool et le/les middlewares
const composedEnhancers = composeWithDevTools(applyMiddleware(authMiddleware));

const store = createStore(
  // le reducer
  reducer,
  // les devtools + le middleware
  composedEnhancers,
);

export default store;
