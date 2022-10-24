import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_DELAY, DEFAULT_LENGTH } from '@utils';

interface SortSettingsState {
  sortingType: string;
  arrayLength: number;
  delay: number;
}

const initialState: SortSettingsState = {
  sortingType: 'insertion',
  arrayLength: DEFAULT_LENGTH,
  delay: DEFAULT_DELAY,
};

export const sortSettingsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setArrayLength: (state, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
    setDelay: (state, action: PayloadAction<number>) => {
      state.delay = action.payload;
    },
  },
});

export const { setArrayLength, setDelay } = sortSettingsSlice.actions;

export default sortSettingsSlice.reducer;
