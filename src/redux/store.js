import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
// const persistedFilterReducer = persistReducer(persistConfig, filterSlice.reducer);

 export const store = configureStore({
   reducer: persistedRootReducer,
   middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });

export const persistor = persistStore(store);