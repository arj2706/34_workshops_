import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { loginApi } from './services/api';

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    // Add other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);

export default store;
