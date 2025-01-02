import { configureStore } from '@reduxjs/toolkit';
import mediaQueryReducer from './slices/mediaQuerySlice';

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
