import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
    signOut: (state, action) => {
      state.value = null;
    },
  },
});

export const userSelect = (state) => state.user.value;

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
