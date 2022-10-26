import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_DELAY, DEFAULT_LENGTH } from '@utils';

interface SortSettingsState {
  sortingType: string;
  arrayLength: number;
  delay: number;
  isSorting: boolean;
  isSorted: boolean;
  sortingProgress: number;
}

const initialState: SortSettingsState = {
  sortingType: 'insertion',
  arrayLength: DEFAULT_LENGTH,
  delay: DEFAULT_DELAY,
  isSorting: false,
  isSorted: false,
  sortingProgress: 0,
};

export const sortSettingsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    resetArray: (state) => {
      state.isSorted = initialState.isSorted;
      state.sortingProgress = initialState.sortingProgress;
    },
    setArrayLength: (state, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
    setDelay: (state, action: PayloadAction<number>) => {
      state.delay = action.payload;
    },
    setIsSorting: (state, action: PayloadAction<boolean>) => {
      state.isSorting = action.payload;
    },
    setIsSorted: (state, action: PayloadAction<boolean>) => {
      state.isSorted = action.payload;
    },
    increaseSortingProgress: (state, action: PayloadAction<number>) => {
      state.sortingProgress += action.payload;
    },
  },
});

export const {
  resetArray,
  setDelay,
  setIsSorting,
  setArrayLength,
  setIsSorted,
  increaseSortingProgress,
} = sortSettingsSlice.actions;

export default sortSettingsSlice.reducer;
