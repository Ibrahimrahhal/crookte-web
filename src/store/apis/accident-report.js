import { createApi } from '@reduxjs/toolkit/query/react';
import BaseQuery from './base';

export const accidentReportAPI = createApi({
  reducerPath: 'accidentReportAPI',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    getAccidentReports: builder.query({
      query: () => ({
        url: '/report',
        method: 'GET',
      }),
    }),
    approveAccidentReport: builder.mutation({
      query: (payload) => ({
        url: `report/approve/${payload.id}`,
        method: 'PUT',
      }),
    }),
  }),
});

export const { useGetAccidentReportsQuery, useApproveAccidentReportMutation } = accidentReportAPI;
