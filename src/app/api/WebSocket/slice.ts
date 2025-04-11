import { createSlice } from '@reduxjs/toolkit';
import { messagePayload } from "../../../entities/websocket";

type WebSocketMessages = {
  messages: any[];
}

const initialState: WebSocketMessages = {
  messages: [],
}

const {actions, reducer} = createSlice({
  name: "ws",
  initialState,
  reducers: {
    addMessage: (state, action: messagePayload) => {
      if (action.payload) state.messages.push(action.payload);
    },
    sendMessage: (state, action) => {}
  }
});

export const {
  addMessage,
  sendMessage
} = actions;

export default reducer;