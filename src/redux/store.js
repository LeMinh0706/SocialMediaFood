import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { thunk } from 'redux-thunk';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
let persistor = persistStore(store)
export { store, persistor }
