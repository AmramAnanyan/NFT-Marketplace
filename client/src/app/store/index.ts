import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'app';
import trendingUserNfts from 'entities/Home/model/trendUserNft';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    trendingUserNfts: trendingUserNfts
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
