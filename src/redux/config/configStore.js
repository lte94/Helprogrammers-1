import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionsSlice from '../module/QuestionsSlice';
import hintsSlice from '../module/HintsSlice';
import detailSlice from '../module/DetailSlice';
import themeSlice from '../module/ThemeSlice';

const store = configureStore(
  {
    reducer: {
      questions: questionsSlice,
      detail: detailSlice,
      hints: hintsSlice,
      theme: themeSlice,
    },
  },
  composeWithDevTools(),
);

export default store;
