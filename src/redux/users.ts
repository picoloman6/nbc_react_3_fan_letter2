import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfoApi, updateUserInfoApi } from '../apis/users';
import { UserInfoTypes } from '../types/users';

interface StateTypes {
  isLoading: boolean;
  userInfo: UserInfoTypes;
  error: unknown;
}

export const __getUserInfo = createAsyncThunk(
  '__getUserInfo',
  async (token: string, thunkApi) => {
    try {
      const data = await getUserInfoApi(token);

      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const __patchUserInfo = createAsyncThunk(
  '__patchUserInfo',
  async (
    { token, formData }: { token: string; formData: FormData },
    thunkApi
  ) => {
    try {
      const data = await updateUserInfoApi(token, formData);

      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState: StateTypes = {
  isLoading: false,
  userInfo: { id: '', nickname: '', avatar: null, success: false },
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(__getUserInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__patchUserInfo.fulfilled, (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    });
  }
});

export default userSlice.reducer;
