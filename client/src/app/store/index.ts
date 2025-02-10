import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'app';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
