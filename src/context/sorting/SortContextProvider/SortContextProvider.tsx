import { getInsertionSortAnimations } from '@utils';
import React from 'react';

import {
  INITIAL_VALUE,
  ItemsContext,
  ItemsContextType,
} from '../ItemsContext/ItemsContext';
import {
  INITIAL_SETTINGS,
  SortContext,
  SortingContextType,
} from '../SortContext/SortContext';

export const SortContextProvider = ({ children }: React.PropsWithChildren) => {
  const [settings, setSettings] =
    React.useState<SortingContextType>(INITIAL_SETTINGS);

  const [items, setItems] = React.useState<ItemsContextType['items']>(
    INITIAL_VALUE.items
  );

  React.useEffect(() => {
    const newItems = Array.from({ length: settings.arrayLength }, () =>
      Math.floor(Math.random() * 700)
    );

    setItems(newItems);
  }, [settings.arrayLength]);

  const animateDivs = (animations: number[][], newItems: number[]) => {
    animations.forEach(([first, second], index) => {
      const firstDiv = document.getElementById(`${first}`);
      const secondDiv = document.getElementById(`${second}`);

      if (firstDiv && secondDiv) {
        setTimeout(() => {
          firstDiv.style.backgroundColor = '#2563eb';
          secondDiv.style.backgroundColor = '#2563eb';

          [firstDiv.style.height, secondDiv.style.height] = [
            secondDiv.style.height,
            firstDiv.style.height,
          ];

          setTimeout(() => {
            firstDiv.style.backgroundColor = '#fff';
            secondDiv.style.backgroundColor = '#fff';

            if (index === animations.length - 1) {
              setItems(newItems);
            }
          }, settings.delay * 2);
        }, index * settings.delay * 2);
      }
    });
  };

  const sort = React.useCallback(
    (type: string) => {
      switch (type) {
        case 'insertion': {
          const { animations, newItems } = getInsertionSortAnimations(items);
          animateDivs(animations, newItems);
          break;
        }
        default:
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  const sortingValue = React.useMemo(
    () => ({
      ...settings,
      setSettings,
      sort,
    }),
    [settings, sort]
  );

  const itemsValue = React.useMemo(() => ({ items, setItems }), [items]);

  return (
    <ItemsContext.Provider value={itemsValue}>
      <SortContext.Provider value={sortingValue}>
        {children}
      </SortContext.Provider>
    </ItemsContext.Provider>
  );
};
