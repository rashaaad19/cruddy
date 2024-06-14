import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  initialState: {
    isAuthenticated: false,
  },
  name: "userAuth",
  reducers: {
    setAuth(state, action) {
      const authenticationStatus = action.payload;
      state.isAuthenticated = authenticationStatus;
    },
  },
});

export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice