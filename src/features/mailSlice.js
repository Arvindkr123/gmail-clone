import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state, action) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state, action) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export default mailSlice.reducer;
