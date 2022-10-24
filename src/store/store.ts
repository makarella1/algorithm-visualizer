import arrayItemsReducer from '@features/slices/arrayItemsSlice';
import insertionSortReducer from '@features/slices/insertionSortSlice';
import sortSettingsReducer from '@features/slices/sortSettingsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sortSettings: sortSettingsReducer,
    arrayItems: arrayItemsReducer,
    insertionSort: insertionSortReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
