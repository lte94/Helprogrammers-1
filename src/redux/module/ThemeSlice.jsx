import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hellMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.hellMode = !state.hellMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
