import { SORT_TYPES } from './sortTypes';

export const isSortNameValid = (sortName: string) => {
  return SORT_TYPES.some(({ slug }) => slug === sortName);
};
