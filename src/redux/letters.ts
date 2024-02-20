import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  deleteLetterApi,
  getLettersApi,
  postLetterApi,
  updateLetterApi
} from '../apis/letters';
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

export const __postLetter = createAsyncThunk(
  'postLetter',
  async (newLetter: LettersType, thunkApi) => {
    try {
      const data = await postLetterApi(newLetter);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const __deleteLetter = createAsyncThunk(
  'deleteLetter',
  async (id: string, thunkApi) => {
    try {
      await deleteLetterApi(id);
      return thunkApi.fulfillWithValue(id);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const __updateLetter = createAsyncThunk(
  'updateLetter',
  async ({ id, content }: { id: string; content: string }, thunkApi) => {
    try {
      await updateLetterApi(id, content);
      return thunkApi.fulfillWithValue({ id, content });
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
    builder.addCase(__postLetter.fulfilled, (state, action) => {
      state.letters = [action.payload, ...state.letters];
    });
    builder.addCase(__deleteLetter.fulfilled, (state, action) => {
      state.letters = state.letters.filter((v) => v.id !== action.payload);
    });
    builder.addCase(__updateLetter.fulfilled, (state, action) => {
      state.letters = state.letters.map((v) =>
        v.id === action.payload.id
          ? { ...v, content: action.payload.content }
          : v
      );
    });
  }
});

export default lettersSlice.reducer;
