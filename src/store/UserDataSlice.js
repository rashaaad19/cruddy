import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  initialState: {
    id: null,
    email: "default@email.com",
  },
  name: "userData",
  reducers: {
    setUserData(state, action) {
      const { id, email } = action.payload;
      state.email = email;
      state.id = id;
    },
    clearUserData(state) {
      state.email = "default@email.com";
      state.id = null;
    },
  },
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;
