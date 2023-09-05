import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
const Store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});

export default Store;
