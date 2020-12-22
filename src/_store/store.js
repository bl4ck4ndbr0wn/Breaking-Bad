/**
 * Create the store with dynamic reducers
 */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createReducer from './reducers';

export default function appStore(initialState = {}) {
  return configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware()],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });
}
// import { createLogger } from 'redux-logger';
// const loggerMiddleware = createLogger();
//
// loggerMiddleware