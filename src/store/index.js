import { configureStore } from '@reduxjs/toolkit';
import Slices from './slices';
import { Middlewares as APIMiddlewares, Reducers as APIReducers } from './apis';

export const store = configureStore({
  reducer: {
    ...Slices,
    ...APIReducers,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...APIMiddlewares);
  },
});
