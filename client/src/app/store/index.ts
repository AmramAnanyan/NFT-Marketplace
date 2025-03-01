import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'app';
import homeSlice from 'entities/Home/model/trendUserNft';
import auth from 'entities/Registration/model';
import user from 'entities/User/model';
import marketPlaceSlice from 'entities/MarketPlace/model';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    homeData: homeSlice,
    auth: auth,
    user: user,
    marketPlace: marketPlaceSlice
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
