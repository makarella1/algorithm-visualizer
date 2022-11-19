import { ArraySettings, Bars, PageLayout } from '@components';
import { useAppDispatch, useAppSelector } from '@features/hooks';
import { selectArrayLength } from '@features/selectors';
import { setNewItems } from '@features/slices/arrayItemsSlice';
import { resetSettings, setSortType } from '@features/slices/sortSettingsSlice';
import { clearTimeouts, SortName } from '@utils';
import React from 'react';
import { useParams } from 'react-router-dom';

export const SortingPage = () => {
  const { sortName } = useParams();

  const dispatch = useAppDispatch();

  const arrayLength = useAppSelector(selectArrayLength);

  React.useEffect(() => {
    dispatch(resetSettings());
    dispatch(setNewItems(arrayLength));
  }, [arrayLength, dispatch]);

  React.useEffect(() => {
    dispatch(setSortType(sortName! as SortName));
    dispatch(setNewItems(arrayLength));
    dispatch(resetSettings());
    clearTimeouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sortName]);

  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <ArraySettings sortName={sortName as SortName} />
        <h2 className="mb-10 text-center text-3xl font-black capitalize">
          <span className="text-blue-500">{sortName}</span> Sort
        </h2>
      </div>

      <Bars />
    </PageLayout>
  );
};
