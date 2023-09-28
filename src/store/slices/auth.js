import { createSlice } from '@reduxjs/toolkit';
import TokenUtil from '../../utils/token';

const initialState = {
  isUserLoggedIn: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      TokenUtil.saveToken(action.payload.accessToken);
      state.user = TokenUtil.decode(action.payload.accessToken);
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export default counterSlice;
