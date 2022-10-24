import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { animateInsertionSort, getInsertionSortAnimations } from '@utils';

import { setSortedItems } from './arrayItemsSlice';

interface InserionSortParams {
  arrayToSort: number[];
  delay: number;
}

const sortArray = createAsyncThunk(
  'insertionSort/sort',
  async ({ delay, arrayToSort }: InserionSortParams, { dispatch }) => {
    const { animations, sorted } = getInsertionSortAnimations(arrayToSort);
    const isSorted = await animateInsertionSort(animations, delay);

    dispatch(setSortedItems(sorted));

    return isSorted;
  }
);

export const insertionSortSlice = createSlice({
  name: 'insertionSort',
  initialState: {},
  reducers: {
    insertionSort: (_, action: PayloadAction<InserionSortParams>) => {
      const { delay, arrayToSort } = action.payload;
      const { animations } = getInsertionSortAnimations(arrayToSort);
      animateInsertionSort(animations, delay);
    },
  },
  extraReducers: {
    [sortArray.fulfilled]: (state, action) => {},
  },
});

export const { insertionSort } = insertionSortSlice.actions;

export default insertionSortSlice.reducer;
