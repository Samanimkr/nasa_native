
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './rootReducer';


const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger));
export const persistor = persistStore(store);