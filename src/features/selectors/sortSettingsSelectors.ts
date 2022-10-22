import { RootState } from 'store/store';

export const selectArrayLength = (state: RootState) =>
  state.sortSettings.arrayLength;

export const selectDelay = (state: RootState) => state.sortSettings.delay;

export const seletSortingType = (state: RootState) =>
  state.sortSettings.sortingType;
