import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMessage: {},
  },
  reducers: {
    openSendMessage: (state, action) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state, action) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage, openMessage } =
  mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMessage = (state) => state.mail.selectedMessage;
export default mailSlice.reducer;
