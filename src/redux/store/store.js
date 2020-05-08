import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from '../root-reducer';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

// for saving your cart in local storage so items dont get lost during refresh
export const persistor = persistStore(store);

export default {store, persistor};