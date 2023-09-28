import { authAPI } from './auth';
import { unitRequestAPI } from './unit-request';
import { accidentReportAPI } from './accident-report';

const APIs = [authAPI, unitRequestAPI, accidentReportAPI];

export const Middlewares = APIs.map((api) => api.middleware);
export const Reducers = APIs.reduce((acc, api) => {
  acc[api.reducerPath] = api.reducer;
  return acc;
}, {});
