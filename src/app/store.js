import { configureStore } from "@reduxjs/toolkit";
import formValidityReducer from "../features/formValiditySlice";

const store = configureStore({
  reducer: {
    formValidity: formValidityReducer,
  },
});

export default store;
