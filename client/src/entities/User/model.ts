import { createSlice } from '@reduxjs/toolkit';
import { getUserDataAsync } from 'features/User/thunks';
import { RequestStatusNames } from 'shared/constants/requestStatuses';
interface IUser {
  status: RequestStatusNames;
  success: boolean;
  user: null | Record<string, any> | Error;
}
const initialState: IUser = {
  status: RequestStatusNames.IDLE,
  success: false,
  user: null
};
export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserDataAsync.pending, (state, action) => {
        state.status = RequestStatusNames.PENDING;
      })
      .addCase(getUserDataAsync.fulfilled, (state, action) => {
        state.status = RequestStatusNames.SUCCESS;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(getUserDataAsync.rejected, (state, action) => {
        state.status = RequestStatusNames.REJECTED;
        state.success = false;
        state.user = action.payload as Error;
      });
  }
});

export const selectUserData = (state: any) => state.user.user;

export default userSlice.reducer;
