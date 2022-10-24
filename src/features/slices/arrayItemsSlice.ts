import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setNewItems: (state, action: PayloadAction<number>) => {
      state.items = Array.from(
        {
          length: action.payload,
        },
        () => Math.floor(Math.random() * 700)
      );
    },
    setSortedItems: (state, action: PayloadAction<number[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setNewItems, setSortedItems } = arrayItemsSlice.actions;

export default arrayItemsSlice.reducer;
