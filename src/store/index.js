import { configureStore } from '@reduxjs/toolkit';
import Slices from './slices';

export const store = configureStore({
  reducer: {
    ...Slices,
  },
});
