import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";
import userDataSlice from "./UserDataSlice";

const store = configureStore({
  reducer: {
    auth: userAuthSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export default store;
