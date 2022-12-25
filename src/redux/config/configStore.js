import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from '../module/QuestionsSlice';
import hintsSlice from '../module/HintsSlice';

const store = configureStore({
  reducer: { questions: questionsSlice, hints: hintsSlice },
});

export default store;
