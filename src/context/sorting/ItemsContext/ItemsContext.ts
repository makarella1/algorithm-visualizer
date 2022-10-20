import React, { Dispatch, SetStateAction } from "react";

export interface ItemsContextType {
  items: number[];
  setItems?: Dispatch<SetStateAction<number[]>>;
}

export const INITIAL_VALUE: ItemsContextType = {
  items: [],
};

export const ItemsContext =
  React.createContext<ItemsContextType>(INITIAL_VALUE);
