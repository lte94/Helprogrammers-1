import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = 'http://localhost:3001/questions';

const initialState = {
  questions: [],
  question: [],
  isLoading: false,
  error: null,
};

export const __getQuestions = createAsyncThunk(
  'GET_QUESTIONS',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(serverUrl);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __getSearchedQuestions = createAsyncThunk(
  'GET_SEARCH_QUESTIONS',
  async (payload, thunkAPI) => {
    try {
      const searchString = payload.toLowerCase();
      const data = await axios.get(`http://localhost:3001/questions`);
      const getMatchingData = data.data.filter(
        (question) =>
          question.title.includes(searchString) ||
          question.content.includes(searchString),
      );
      return thunkAPI.fulfillWithValue(getMatchingData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __getQuestion = createAsyncThunk(
  'GET_QUESTION',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/questions/${payload}`,
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: {
    [__getQuestions.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getQuestions.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.questions = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getQuestions.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__getSearchedQuestions.pending]: (state) => {
      state.isLoading = true;
    },
    [__getSearchedQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [__getSearchedQuestions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getQuestion.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getQuestion.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.question = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getQuestion.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const questionSlice = questionsSlice.actions;
export default questionsSlice.reducer;
