import { configureStore } from '@reduxjs/toolkit';
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

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
const persistedFilterReducer = persistReducer(persistConfig, filterSlice.reducer);

 export const store = configureStore({
   reducer: {
     contacts: persistedContactsReducer,
     filter: persistedFilterReducer,
   },
   middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });

export const persistor = persistStore(store);