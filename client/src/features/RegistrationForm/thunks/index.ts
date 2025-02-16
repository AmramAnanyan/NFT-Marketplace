import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserRegistration } from '../api';

export const userRegistrationAsync = createAsyncThunk(
  'user/registration',
  async (form: Record<string, any>, { rejectWithValue }) => {
    try {
      return await fetchUserRegistration(form);
    } catch (error: any) {
      rejectWithValue(error);
      throw new Error('Could not register');
    }
  }
);
