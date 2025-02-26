import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'app';
import trendingUserNfts from 'entities/Home/model/trendUserNft';
import auth from 'entities/Registration/model';
import user from 'entities/User/model';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    trendingUserNfts: trendingUserNfts,
    auth: auth,
    user: user
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
