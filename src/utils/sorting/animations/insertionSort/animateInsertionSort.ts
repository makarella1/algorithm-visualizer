import { increaseSortingProgress } from '@features/slices/sortSettingsSlice';
import { store } from '@store';
import { INITIAL_DELAY, MAX_PROGRESS } from '@utils';

export const animateInsertionSort = (animations: number[][], delay: number) => {
  const step = MAX_PROGRESS / animations.length;

  return new Promise<boolean>((resolve) => {
    animations.forEach(([first, second], index) => {
      const firstDiv = document.getElementById(`${first}`);
      const secondDiv = document.getElementById(`${second}`);

      if (firstDiv && secondDiv) {
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
      }
    });
  });
};
