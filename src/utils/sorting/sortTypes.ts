interface SortInfo {
  name: string;
  slug: SortName;
}

export type SortName = 'insertion' | 'bubble';

export const SORT_TYPES: SortInfo[] = [
  {
    name: 'Insertion sort',
    slug: 'insertion',
  },
  {
    name: 'Bubble sort',
    slug: 'bubble',
  },
];
