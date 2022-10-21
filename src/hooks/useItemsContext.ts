import { ItemsContext } from "@context";
import React from "react";

export const useItemsContext = () => {
  const context = React.useContext(ItemsContext);

  return { ...context };
};
