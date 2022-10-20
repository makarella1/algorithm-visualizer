import { useSortContext } from "@hooks";
import React from "react";

import {
  INITIAL_VALUE,
  ItemsContext,
  ItemsContextType,
} from "../ItemsContext/ItemsContext";

export const ItemsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = React.useState<ItemsContextType["items"]>(
    INITIAL_VALUE.items
  );
  const { arrayLength } = useSortContext();

  React.useEffect(() => {
    const newItems = Array.from({ length: arrayLength }, () =>
      Math.floor(Math.random() * 700)
    );
    setItems(newItems);
    console.log(newItems);
  }, [arrayLength]);

  const value = React.useMemo(
    () => ({
      items,
      setItems,
    }),
    [items]
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
