//@ts-nocheck
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userRegistration = createAsyncThunk(
  'user/registration',
  async (formData: any, api: string) => {
    const response = await Promise.all();
    return response;
  }
);
