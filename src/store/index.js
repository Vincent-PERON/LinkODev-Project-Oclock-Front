import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/authMiddleware';

import reducer from '../reducers';

const store = createStore(
  // le reducer
  reducer,
  // les devtools
  devToolsEnhancer(),
  // le middleware
  // authMiddleware,
);

export default store;
