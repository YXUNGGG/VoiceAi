import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from './sagas';

import catsReducer from './catSlice';

const store = configureStore({
  reducer: {
    cats: catsReducer
  }
});

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch