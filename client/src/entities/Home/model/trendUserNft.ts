import { createSlice } from '@reduxjs/toolkit';
import {
  getTopCreatorsAsync,
  getTrendingUsersNFTsAsync
} from 'features/Home/thunks';
import { RequestStatusNames } from 'shared/constants/requestStatuses';
const initialState = { status: 'idle', products: [], topCreators: [] };
const mostTrendingUserNFTs = createSlice({
  name: 'trendingUserNfts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTrendingUsersNFTsAsync.pending, (state, action) => {
        state.status = RequestStatusNames.PENDING;
      })
      .addCase(getTrendingUsersNFTsAsync.fulfilled, (state, action) => {
        state.status = RequestStatusNames.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getTrendingUsersNFTsAsync.rejected, (state, action) => {
        state.status = RequestStatusNames.REJECTED;
        state.products = [];
      });
    builder
      .addCase(getTopCreatorsAsync.pending, (state, action) => {
        state.status = RequestStatusNames.PENDING;
      })
      .addCase(getTopCreatorsAsync.fulfilled, (state, action) => {
        state.topCreators = action.payload;
        state.status = RequestStatusNames.SUCCESS;
      })
      .addCase(getTopCreatorsAsync.rejected, (state, action) => {
        state.status = RequestStatusNames.REJECTED;
        state.topCreators = action.payload as any;
      });
  }
});

export const selectTrendingUserNfts = (state: any) => state.homeData.products;
export const selectTopCreators = (state: any) => {
  return state.homeData.topCreators;
};
export default mostTrendingUserNFTs.reducer;
