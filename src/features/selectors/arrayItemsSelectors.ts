import { RootState } from 'store/store';

export const selectArrayItems = (state: RootState) => state.arrayItems.items;
