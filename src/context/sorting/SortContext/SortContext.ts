import React, { Dispatch, SetStateAction } from "react";

export interface SortingContextType {
  arrayLength: number;
  delay: number;
  type: string;
  setSettings?: Dispatch<SetStateAction<SortingContextType>>;
  sort: (type: string) => void;
}

export const INITIAL_SETTINGS: SortingContextType = {
  arrayLength: 50,
  delay: 5,
  type: "",
  sort: () => {},
};

export const SortContext =
  React.createContext<SortingContextType>(INITIAL_SETTINGS);
