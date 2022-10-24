import type { RootState } from '@store';

export const selectArrayItems = (state: RootState) => state.arrayItems.items;
