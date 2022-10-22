import arrayItemsReducer from '@features/slices/arrayItemsSlice';
import sortSettingsReducer from '@features/slices/sortSettingsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    sortSettings: sortSettingsReducer,
    arrayItems: arrayItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
