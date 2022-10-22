import { PageLayout } from '@components';
import { useAppDispatch, useAppSelector } from '@features/hooks';
import { selectArrayLength, selectDelay } from '@features/selectors';
import {
  setArrayItems,
  sortArrayItems,
} from '@features/slices/arrayItemsSlice';
import {
  setArrayLength,
  setDelay,
  setSortingType,
} from '@features/slices/sortSettingsSlice';
import * as Label from '@radix-ui/react-label';
import * as Slider from '@radix-ui/react-slider';
import { DEFAULT_DELAY, DEFAULT_LENGTH } from '@utils';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const SortingPage = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  const arrayLength = useAppSelector(selectArrayLength);
  const delay = useAppSelector(selectDelay);

  const onLengthChanged = ([length]: [number]) => {
    dispatch(setArrayLength(length));
  };

  const onDelayChanged = ([delayValue]: [number]) => {
    dispatch(setDelay(delayValue));
  };

  const sortName = Object.values(params).at(0);

  React.useEffect(() => {
    if (sortName) {
      dispatch(setSortingType(sortName));
    }
  }, [sortName, dispatch]);

  React.useEffect(() => {
    dispatch(setArrayItems());
  }, [arrayLength, dispatch]);

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <div className="w-[400px]">
          <p className="text-md mb-4 text-center font-bold">
            &#10024;Choose the right settings and watch the magic happening
            &#10024;
          </p>
          <div className="flex flex-col gap-5 rounded-xl bg-gray-800 p-4">
            <div className="w-full">
              <Label.Root className="mb-1" htmlFor="length">
                Array length:
              </Label.Root>
              <Slider.Root
                className="relative flex h-5 w-full items-center"
                defaultValue={[DEFAULT_LENGTH]}
                min={5}
                step={5}
                max={200}
                onValueChange={onLengthChanged}
                value={[arrayLength]}
                id="length"
              >
                <Slider.Track className="relative h-1 w-full rounded-full bg-gray-700">
                  <Slider.Range className="absolute h-full rounded-full bg-white" />
                </Slider.Track>
                <Slider.Thumb className="relative block h-4 w-4 rounded-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">
                  <p className="absolute top-5 text-xs">{arrayLength}</p>
                </Slider.Thumb>
              </Slider.Root>
            </div>
            <div className="w-full">
              <Label.Root className="mb-1" htmlFor="delay">
                Delay:
              </Label.Root>
              <Slider.Root
                className="relative flex h-5 w-full items-center"
                defaultValue={[DEFAULT_DELAY]}
                min={1}
                max={100}
                onValueChange={onDelayChanged}
                value={[delay]}
                id="delay"
              >
                <Slider.Track className="relative h-1 w-full rounded-full bg-gray-700">
                  <Slider.Range className="absolute h-full rounded-full bg-white" />
                </Slider.Track>
                <Slider.Thumb className="relative block h-4 w-4 rounded-full bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">
                  <p className="absolute top-5 text-xs">{delay}</p>
                </Slider.Thumb>
              </Slider.Root>
            </div>
            <button
              className="mt-8 inline-block rounded-xl bg-pink-600 p-3 font-bold transition-all duration-200 hover:bg-pink-700 active:scale-95"
              onClick={() => {
                if (sortName) {
                  sortArrayItems(sortName);
                }
              }}
            >
              Sort &apos;Em Bars!
            </button>
          </div>
        </div>
        <h2 className="mb-10 text-center text-3xl font-black capitalize">
          <span className="text-blue-500">{sortName}</span> Sort
        </h2>
      </div>

      <Outlet />
    </PageLayout>
  );
};
