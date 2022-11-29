import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { catalogReducer } from './catalog/catalogReducer';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
