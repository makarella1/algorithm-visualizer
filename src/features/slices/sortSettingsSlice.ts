import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortName } from '@utils';
import { DEFAULT_DELAY, DEFAULT_LENGTH } from '@utils';

interface SortSettingsState {
  sortType: string;
  arrayLength: number;
  delay: number;
  isSorting: boolean;
  isSorted: boolean;
  sortingProgress: number;
}

const initialState: SortSettingsState = {
  sortType: 'insertion',
  arrayLength: DEFAULT_LENGTH,
  delay: DEFAULT_DELAY,
  isSorting: false,
  isSorted: false,
  sortingProgress: 0,
};

const sortSettingsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    resetSettings: (state) => {
      state.isSorted = initialState.isSorted;
      state.sortingProgress = initialState.sortingProgress;
      state.isSorting = initialState.isSorting;
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
    setSortingProgress: (state, action: PayloadAction<number>) => {
      state.sortingProgress = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortName>) => {
      state.sortType = action.payload;
    },
  },
});

export const {
  resetSettings,
  setDelay,
  setIsSorting,
  setArrayLength,
  setIsSorted,
  increaseSortingProgress,
  setSortType,
  setSortingProgress,
} = sortSettingsSlice.actions;

export default sortSettingsSlice.reducer;
