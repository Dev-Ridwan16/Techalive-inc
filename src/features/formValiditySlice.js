import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormValid: false,
  errors: {
    name: "",
    email: "",
    phone: "",
    message: "",
    time: "",
  },
};

const formValiditySlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValid: (state) => {
      state.isFormValid = true;
    },
    setFormInvalid: (state) => {
      state.isFormValid = false;
    },
    setFormErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setFormValid, setFormInvalid, setFormErrors } =
  formValiditySlice.actions;
export default formValiditySlice.reducer;
