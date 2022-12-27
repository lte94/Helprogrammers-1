import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const QUESTIONS_URL = process.env.REACT_APP_QUESTIONS_URL;

const initialState = {
  question: [],
  isLoading: false,
  error: null,
};

export const __getDetail = createAsyncThunk(
  'GET_DETAIL',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${QUESTIONS_URL}/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __updateDetail = createAsyncThunk(
  'UPDATE_DETAIL',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${QUESTIONS_URL}/${payload.id}`,
        payload.updateQuestion,
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: {
    // read
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.question = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete

    // update
    [__updateDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.question = action.payload.updateQuestion;
    },
    [__updateDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const detail = detailSlice.actions;
export default detailSlice.reducer;
