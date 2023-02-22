import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  encodedToken: '',
  authStatus: localStorage.getItem('ENCODED_TOKEN') ? true : false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.authStatus = true;
      state.encodedToken = action.payload;
    },
    registerNewUser: (state, action) => {
      state.authStatus = true;
      state.encodedToken = action.payload;
    },
    logoutUser: (state) => {
      state.encodedToken = '';
      state.authStatus = false;
    }
  }
});
export const { loginUser, logoutUser, registerNewUser } = authSlice.actions;
export default authSlice.reducer;
