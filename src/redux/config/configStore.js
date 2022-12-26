import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from '../module/QuestionsSlice';
import hintsSlice from '../module/HintsSlice';
import detailSlice from '../module/DetailSlice';

const store = configureStore({
  reducer: {
    questions: questionsSlice,
    detail: detailSlice,
    hints: hintsSlice,
  },
});

export default store;
