import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrendingUserNFTs } from 'shared/api/nftsApi';
// it also should ba receive trending status
export const getTrendingUsersNFTsAsync = createAsyncThunk(
  'trendingUserNfts/fetchByCreatorId',
  async (creatorId?: number | string) => {
    console.log('worked this?');
    try {
      return await fetchTrendingUserNFTs();
    } catch (error) {
      throw new Error('Cannot fetch');
    }
  }
);
