import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

export const NavbarDropdown = ({ children }: React.PropsWithChildren) => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <DropdownMenu.Root open={isOpened} onOpenChange={setIsOpened}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-between gap-1 rounded-lg bg-gray-700 p-2 text-sm focus-visible:outline-none">
          <p>Sorting</p>
          <ChevronDownIcon
            className={`transition-transform duration-200 ${
              isOpened ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="relative flex w-[200px] animate-dropdown-appear cursor-pointer flex-col gap-1 rounded-lg bg-gray-700 p-1 text-sm text-white"
        >
          <div className="absolute -top-0.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-gray-700" />
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
