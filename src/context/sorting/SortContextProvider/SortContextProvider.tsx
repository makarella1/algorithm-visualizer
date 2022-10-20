import React from "react";

import {
  INITIAL_SETTINGS,
  SortContext,
  SortingContextType,
} from "../SortContext/SortContext";

export const SortContextProvider = ({ children }: React.PropsWithChildren) => {
  const [settings, setSettings] =
    React.useState<SortingContextType>(INITIAL_SETTINGS);

  const value = React.useMemo(
    () => ({
      ...settings,
      setSettings,
    }),
    [settings]
  );

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
