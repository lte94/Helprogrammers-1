import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const QUESTIONS_URL = process.env.REACT_APP_QUESTIONS_URL;

const initialState = {
  questions: [],
  isLoading: false,
  error: null,
};

export const __addQuestions = createAsyncThunk(
  'POST_QUESTIONS',
  async (newQuestion, thunkAPI) => {
    try {
      const response = await axios.post(QUESTIONS_URL, newQuestion);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __deleteDetail = createAsyncThunk(
  'DELETE_DETAIL',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${QUESTIONS_URL}/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __getQuestions = createAsyncThunk(
  'GET_QUESTIONS',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(QUESTIONS_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    getQuestionId: (state, action) => {
      state.questions.find((question) => {
        return question.id === action.payload;
      });
    },
  },
  extraReducers: {
    [__getQuestions.pending]: (state) => {
      state.isLoading = true;
    },
    [__getQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [__getQuestions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addQuestions.pending]: (state) => {
      state.isLoading = true;
    },
    [__addQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions.push(action.payload);
    },
    [__addQuestions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteDetail.fulfilled]: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload,
      );
    },
    [__deleteDetail.pending]: (state) => {},
    [__deleteDetail.rejected]: (state, action) => {},
  },
});

export const questionSlice = questionsSlice.actions;
export default questionsSlice.reducer;
