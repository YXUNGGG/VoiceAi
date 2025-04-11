// const websocketMiddleware = store => {
//   const socket = new WebSocket('ws://your-url');
//   socket.onmessage = (event) => {
//     store.dispatch({ type: 'WS_MESSAGE', payload: event.data });
//   };
//   return next => action => {
//     if (action.type === 'WS_SEND') {
//       socket.send(action.payload);
//     }
//     return next(action);
//   };
// };