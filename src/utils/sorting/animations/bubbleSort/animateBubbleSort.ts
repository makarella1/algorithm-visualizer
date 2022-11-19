import { increaseSortingProgress } from '@features/slices/sortSettingsSlice';
import { store } from '@store';
import { INITIAL_DELAY, MAX_PROGRESS } from '@utils';

import { AnimateSortParams } from '../types';

export const animateBubbleSort = ({ animations, delay }: AnimateSortParams) => {
  const step = MAX_PROGRESS / animations.length;

  return new Promise<boolean>((resolve) => {
    animations.forEach(([first, second], index) => {
      const firstDiv = document.getElementById(`${first}`) as HTMLDivElement;
      const secondDiv = document.getElementById(`${second}`) as HTMLDivElement;

      setTimeout(() => {
        firstDiv.style.backgroundColor = '#2563eb';
        secondDiv.style.backgroundColor = '#2563eb';

        [firstDiv.style.height, secondDiv.style.height] = [
          secondDiv.style.height,
          firstDiv.style.height,
        ];

        setTimeout(() => {
          firstDiv.style.backgroundColor = '#fff';
          secondDiv.style.backgroundColor = '#fff';

          if (index === animations.length - 1) {
            resolve(true);
          }
        }, delay * INITIAL_DELAY);

        store.dispatch(increaseSortingProgress(step));
      }, index * delay * INITIAL_DELAY);
    });
  });
};
