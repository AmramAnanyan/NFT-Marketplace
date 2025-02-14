import { createSlice } from '@reduxjs/toolkit';
import { userRegistrationAsync } from 'features/RegistrationForm/thunks';

const initialState = {
  status: 'idle',
  success: false,
  token: null
};
export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistrationAsync.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(userRegistrationAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.success = true;
        state.token = action.payload.token;
      })
      .addCase(userRegistrationAsync.rejected, (state, action) => {
        state.status = 'rejected';
      });
  }
});
export const selectAuthData = (state: any) => state.auth;
export default registrationSlice.reducer;
