import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getLettersApi } from '../apis/letters';
import { LettersType } from '../types/letters';

interface StateTypes {
  isLoading: boolean;
  letters: LettersType[];
  error: null | unknown;
}

export const __getLetters = createAsyncThunk(
  'getLetters',
  async (_, thunkApi) => {
    try {
      const data = await getLettersApi();
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState: StateTypes = {
  isLoading: false,
  letters: [],
  error: null
};

const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getLetters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.letters = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export default lettersSlice.reducer;
