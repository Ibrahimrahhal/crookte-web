import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TokenUtil from '../../utils/token';

export default fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${TokenUtil.getToken()}`,
  },
});
