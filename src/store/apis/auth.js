import { createApi } from '@reduxjs/toolkit/query/react';
import BaseQuery from './base';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
