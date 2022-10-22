import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '@store';

interface ArrayItemsState {
  items: number[];
}

const initialState: ArrayItemsState = {
  items: [],
};

export const arrayItemsSlice = createSlice({
  name: 'arrayItems',
  initialState,
  reducers: {
    setArrayItems: (state) => {
      state.items = Array.from(
        {
          length: store.getState().sortSettings.arrayLength,
        },
        () => Math.floor(Math.random() * 700)
      );
    },
    sortArrayItems: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'insertion':
          break;
        default:
          break;
      }
    },
  },
});

export const { setArrayItems, sortArrayItems } = arrayItemsSlice.actions;

export default arrayItemsSlice.reducer;
