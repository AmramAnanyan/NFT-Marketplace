import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllNfts, fetchSearchNft } from 'shared/api/nftsApi';

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

export const getSearchedNftsAsync = createAsyncThunk(
  'nfts/getSearched',
  async (query: string, { rejectWithValue }) => {
    try {
      return fetchSearchNft(query);
    } catch (error: any) {
      rejectWithValue(error);
    }
  }
);
