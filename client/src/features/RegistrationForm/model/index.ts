import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state, action) => {});
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

export const userRegistration = createAsyncThunk('user/registration', () => {});
