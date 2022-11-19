import { setSortedItems } from '@features/slices/arrayItemsSlice';
import { setIsSorted, setIsSorting } from '@features/slices/sortSettingsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@store';

interface ThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
}

interface AnimateSortParams {
  animations: number[][];
  delay: number;
  sorted: number[];
}

interface SortAsyncThunkParams {
  sortTag: string;
  getAnimations: (items: number[]) => {
    animations: number[][];
    sorted: number[];
  };
  animateSort: ({
    animations,
    delay,
    sorted,
  }: AnimateSortParams) => Promise<boolean>;
}

export const sortAsyncThunk = ({
  sortTag,
  getAnimations,
  animateSort,
}: SortAsyncThunkParams) =>
  createAsyncThunk<boolean, unknown, ThunkConfig>(
    sortTag,
    async (_, { getState, dispatch }) => {
      const { animations, sorted } = getAnimations(getState().arrayItems.items);

      dispatch(setIsSorting(true));

      const isSorted = await animateSort({
        animations,
        delay: getState().sortSettings.delay,
        sorted,
      });

      if (isSorted) {
        dispatch(setSortedItems(sorted));
      }

      dispatch(setIsSorting(false));
      dispatch(setIsSorted(isSorted));

      return isSorted;
    }
  );
