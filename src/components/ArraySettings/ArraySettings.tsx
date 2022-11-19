import { useAppDispatch, useAppSelector } from '@features/hooks';
import {
  selectArrayLength,
  selectDelay,
  selectIsSorting,
  selectSortingProgress,
} from '@features/selectors';
import {
  bubbleSort,
  insertionSort,
} from '@features/slices/sortAnimationsSlice';
import {
  resetSettings,
  setArrayLength,
  setDelay,
} from '@features/slices/sortSettingsSlice';
import * as Progress from '@radix-ui/react-progress';
import { SortSlider } from '@ui';
import {
  clearTimeouts,
  DEFAULT_DELAY,
  DEFAULT_LENGTH,
  MAX_PROGRESS,
  SortName,
} from '@utils';

interface ArraySettingsProps {
  sortName: SortName;
}

export const ArraySettings = ({ sortName }: ArraySettingsProps) => {
  const dispatch = useAppDispatch();

  const arrayLength = useAppSelector(selectArrayLength);
  const delay = useAppSelector(selectDelay);
  const progress = useAppSelector(selectSortingProgress);
  const isSorting = useAppSelector(selectIsSorting);

  const lengthChangeHandler = ([length]: [number]) => {
    dispatch(setArrayLength(length));

    if (isSorting) {
      clearTimeouts();
      dispatch(resetSettings());
    }
  };

  const delayChangeHandler = ([delayValue]: [number]) => {
    dispatch(setDelay(delayValue));
  };

  const onSort = () => {
    switch (sortName) {
      case 'insertion':
        dispatch(insertionSort({}));
        break;
      case 'bubble':
        dispatch(bubbleSort({}));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[400px]">
      <p className="text-md mb-4 text-center font-bold">
        &#10024;Choose the right settings and watch the magic happening &#10024;
      </p>
      <div className="flex flex-col gap-5 rounded-xl bg-gray-800 p-4">
        <SortSlider
          label="Array length"
          max={200}
          min={5}
          step={5}
          onValueChange={lengthChangeHandler}
          value={[arrayLength]}
          defaultValue={[DEFAULT_LENGTH]}
          id="length"
        />
        <SortSlider
          label="Delay"
          max={100}
          min={1}
          onValueChange={delayChangeHandler}
          value={[delay]}
          defaultValue={[DEFAULT_DELAY]}
          id="delay"
        />

        {isSorting ? (
          <Progress.Root
            className="relative mx-auto mt-8 h-12 w-full overflow-hidden rounded-full bg-gray-700"
            style={{ transform: 'translateZ(0)' }}
            value={MAX_PROGRESS}
          >
            <Progress.Indicator
              className="h-full w-full bg-white transition-transform"
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </Progress.Root>
        ) : (
          <button
            className="mt-8 inline-block h-12 rounded-xl bg-pink-700 font-bold transition-all duration-200 hover:bg-pink-800 active:scale-95"
            onClick={onSort}
          >
            Sort &apos;Em Bars!
          </button>
        )}
      </div>
    </div>
  );
};
