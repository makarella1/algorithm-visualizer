import { createSlice } from '@reduxjs/toolkit';
import { sortAsyncThunk } from '@utils';
import {
  animateBubbleSort,
  animateInsertionSort,
  getBubbleSortAnimations,
  getInsertionSortAnimations,
} from '@utils/sorting/animations';

export const insertionSort = sortAsyncThunk({
  sortTag: 'insertionSort',
  getAnimations: getInsertionSortAnimations,
  animateSort: animateInsertionSort,
});

export const bubbleSort = sortAsyncThunk({
  sortTag: 'bubbleSort',
  getAnimations: getBubbleSortAnimations,
  animateSort: animateBubbleSort,
});

const sortAnimationsSlice = createSlice({
  name: 'sortAnimations',
  initialState: {},
  reducers: {},
});

export default sortAnimationsSlice.reducer;
