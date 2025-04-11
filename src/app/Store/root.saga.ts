import { all } from 'redux-saga/effects';
import { webSocketSaga } from '../api/WebSocket/handleWebsocket.saga';

export default function* rootSaga() {
  yield all([
    webSocketSaga(),
  ]);
}