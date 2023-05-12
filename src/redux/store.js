import {
  configureStore,
  // getDefaultMiddleware
} from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
import { authReducer } from './auth/slice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    persons: contactsSlice.reducer,
    filterContacts: filterSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

//  В СЛАКЕ!!!!!!!!!!!
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authSlice.reducer),
//     contacts: contactSlice.reducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });

//  В СЛАКЕ!!!!!!!!!!!
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authSlice.reducer),
//     contacts: contactSlice.reducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });
