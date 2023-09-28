import { createApi } from '@reduxjs/toolkit/query/react';
import BaseQuery from './base';

export const unitRequestAPI = createApi({
  reducerPath: 'unitRequestAPI',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    getPoliceUnitRequests: builder.query({
      query: () => ({
        url: 'police-unit-request/request',
        method: 'GET',
      }),
    }),
    approvePoliceUnitRequest: builder.mutation({
      query: (payload) => ({
        url: `police-unit-request/request/approve/${payload.id}`,
        method: 'PUT',
      }),
    }),
  }),
});

export const { useGetPoliceUnitRequestsQuery, useApprovePoliceUnitRequestMutation } = unitRequestAPI;
