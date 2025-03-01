import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllNfts } from 'shared/api/nftsApi';

export const getAllNftsAsync = createAsyncThunk(
  'nfts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchAllNfts();
    } catch (error: any) {
      rejectWithValue(error);
    }
  }
);
