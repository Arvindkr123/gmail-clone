import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
const Store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

export default Store;
