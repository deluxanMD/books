import {createSlice} from "@reduxjs/toolkit";
// import type {PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: state => {
      state.isLoggedIn = true;
    }
  }
});

export const {signIn} = authSlice.actions;

export default authSlice.reducer;
