import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    authUser: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});