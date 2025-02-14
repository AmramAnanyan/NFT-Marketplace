import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'app';
import trendingUserNfts from 'entities/Home/model/trendUserNft';
import auth from 'entities/Registration/model';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    trendingUserNfts: trendingUserNfts,
    auth: auth
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
