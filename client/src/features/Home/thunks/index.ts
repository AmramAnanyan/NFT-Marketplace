import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrendingUserNFTs } from 'shared/api/nftsApi';
import { fetchTopCreators } from 'shared/api/userApi';
// it also should ba receive trending status
export const getTrendingUsersNFTsAsync = createAsyncThunk(
  'trendingUserNfts/fetchByCreatorId',
  async (creatorId?: number | string) => {
    try {
      return await fetchTrendingUserNFTs();
    } catch (error) {
      throw new Error('Cannot fetch');
    }
  }
);

export const getTopCreatorsAsync = createAsyncThunk(
  'topCreators/fetchTopCreators',
  async (
    { startRanking, endRanking }: { startRanking: number; endRanking: number },
    { rejectWithValue }
  ) => {
    try {
      return await fetchTopCreators(startRanking, endRanking);
    } catch (err: any) {
      rejectWithValue(err);
    }
  }
);
