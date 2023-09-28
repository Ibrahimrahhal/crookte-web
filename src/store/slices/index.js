import auth from './auth';

const reducers = [auth];

export default reducers.reduce((prev, curr) => {
  return {
    ...prev,
    [curr.name]: curr.reducer,
  };
}, {});
