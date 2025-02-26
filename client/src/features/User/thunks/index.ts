import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData } from 'shared/api/userApi';

export const getUserDataAsync = createAsyncThunk(
  'user/userData',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchUserData();
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
