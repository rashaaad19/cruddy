import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";
import userDataSlice from "./UserDataSlice";

//Saving state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userData", serializedState);
  } catch (error) {
    console.log("Could not save the state", error);
  }
};

//Loading the state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userData");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Could not load the state", error);
    return undefined;
  }
};

// Load persisted state from local storage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    auth: userAuthSlice.reducer,
    userData: userDataSlice.reducer,
  },
  preloadedState: {
    userData: persistedState,
  },
});

// Subscribing to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState().userData.id);
});

export default store;
