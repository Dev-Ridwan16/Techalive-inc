import { configureStore } from "@reduxjs/toolkit";
import formValidityReducer from "../features/formValiditySlice";
import loadingReducer from "../features/loadingSlice";

const store = configureStore({
  reducer: {
    // formValidity: formValidityReducer,
    loading: loadingReducer,
  },
});

export default store;
