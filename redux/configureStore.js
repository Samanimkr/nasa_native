
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import { helloSaga } from '../sagas';
const sagaMiddleware = createSagaMiddleware()

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger,createSagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(helloSaga);
const action = type => store.dispatch({type});