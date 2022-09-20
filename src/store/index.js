import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from '../reducers';

const store = createStore(
  // le reducer
  reducer,
  // les devtools
  devToolsEnhancer(),
);

export default store;