import { RootState } from 'store/store';

export const selectArrayLength = (state: RootState) =>
  state.sortSettings.arrayLength;

export const selectDelay = (state: RootState) => state.sortSettings.delay;

export const selectSortingType = (state: RootState) =>
  state.sortSettings.sortingType;

export const selectIsSorting = (state: RootState) =>
  state.sortSettings.isSorting;

export const selectSortingProgress = (state: RootState) =>
  state.sortSettings.sortingProgress;
