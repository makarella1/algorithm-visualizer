import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { animateInsertionSort, getInsertionSortAnimations } from '@utils';

import { setSortedItems } from './arrayItemsSlice';
import { setIsSorted, setIsSorting } from './sortSettingsSlice';

interface InserionSortParams {
  arrayToSort: number[];
  delay: number;
}

interface ThunkConfig {
  state: RootState;
}

export const animateSorting = createAsyncThunk<
  Promise<void>,
  InserionSortParams,
  ThunkConfig
>(
  'insertionSort/sort',
  async ({ delay, arrayToSort }, { dispatch, getState }) => {
    if (!getState().sortSettings.isSorted) {
      dispatch(setIsSorting(true));

      const { animations, sorted } = getInsertionSortAnimations(arrayToSort);
      const isSorted = await animateInsertionSort(animations, delay);

      dispatch(setSortedItems(sorted));
      dispatch(setIsSorting(false));
      dispatch(setIsSorted(isSorted));
    }
  }
);
