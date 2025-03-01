import { createSlice } from '@reduxjs/toolkit';
import { getAllNftsAsync } from 'features/MarketPlace/thunks';
import { RequestStatusNames } from 'shared/constants/requestStatuses';
const initialState = {
  nfts: { status: RequestStatusNames.IDLE, success: false, data: [] },
  collections: { status: RequestStatusNames.IDLE, success: false, data: [] }
};
export const marketPlaceSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllNftsAsync.pending, (state, action) => {
        state.nfts.status = RequestStatusNames.PENDING;
      })
      .addCase(getAllNftsAsync.fulfilled, (state, action) => {
        state.nfts.status = RequestStatusNames.SUCCESS;
        state.nfts.success = true;
        state.nfts.data = action.payload;
      })
      .addCase(getAllNftsAsync.rejected, (state, action) => {
        state.nfts.status = RequestStatusNames.REJECTED;
        state.nfts.success = false;
        state.nfts.data = action.payload as any;
      });
  }
});

export const setAllNfts = (state: any) => state.marketPlace.nfts;
export default marketPlaceSlice.reducer;
