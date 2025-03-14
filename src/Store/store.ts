import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; 

import rootSaga from './sagas/rootSaga';
import catsReducer from './catSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;