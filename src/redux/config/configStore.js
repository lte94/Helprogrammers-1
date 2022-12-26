import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from '../module/QuestionsSlice';
import hintsSlice from '../module/HintsSlice';
import themeSlice from '../module/ThemeSlice';

const store = configureStore({
  reducer: { questions: questionsSlice, hints: hintsSlice, theme: themeSlice },
});

export default store;
