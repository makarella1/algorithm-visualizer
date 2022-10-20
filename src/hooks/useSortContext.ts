import { SortContext } from "@context";
import React from "react";

export const useSortContext = () => {
  const context = React.useContext(SortContext);

  return { ...context };
};
