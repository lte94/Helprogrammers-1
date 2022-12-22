import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../module/QuestionsSlice";

const store = configureStore({
  reducer: { questions: questionsSlice },
});

export default store;
