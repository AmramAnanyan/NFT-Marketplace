import { createSlice } from '@reduxjs/toolkit';
import { getTrendingUsersNFTsAsync } from 'features/Home/thunks';
const initialState = { status: 'idle', products: [] };
const mostTrendingUserNFTs = createSlice({
  name: 'trendingUserNfts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTrendingUsersNFTsAsync.pending, (state, action) => {
        state.status = 'pending';
        console.log(action, 'payload');
        console.log(state, 'state ==>>');
      })
      .addCase(getTrendingUsersNFTsAsync.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.products = action.payload;
      })
      .addCase(getTrendingUsersNFTsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.products = [];
      });
  }
});

export const selectTrendingUserNfts = (state: any) =>
  state.trendingUserNfts.products;
export default mostTrendingUserNFTs.reducer;
