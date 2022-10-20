import React, { Dispatch, SetStateAction } from "react";

export interface SortingContextType {
  arrayLength: number;
  delay: number;
  type: string;
  setSettings?: Dispatch<SetStateAction<SortingContextType>>;
}

export const INITIAL_SETTINGS: SortingContextType = {
  arrayLength: 50,
  delay: 25,
  type: "",
};

export const SortContext =
  React.createContext<SortingContextType>(INITIAL_SETTINGS);
