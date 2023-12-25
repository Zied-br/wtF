import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SentenceState {
  value: string;
}

const initialState: SentenceState = {
  value: '', 
};

const sentenceSlice = createSlice({
  name: 'sentence',
  initialState,
  reducers: {
    show: (state) => {
      state.value = 'Hello, World!';
    },
    hide: (state) => {
      state.value = '';
    },
  },
});

export const { show, hide } = sentenceSlice.actions;

export default sentenceSlice.reducer;
