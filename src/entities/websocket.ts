//Types for websocket

import { PayloadAction } from "@reduxjs/toolkit";

export type callbackListener = (data: any) => void;

export type messagePayload = PayloadAction<any | undefined>;