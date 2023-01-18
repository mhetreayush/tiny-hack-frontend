import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "John Doe",
    age: 30,
  },
};

export const userReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userReducer.actions;

export default userReducer.reducer;
