import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";

const store = configureStore({
  reducer: {
    auth: userAuthSlice.reducer,
  },
});

export default store;