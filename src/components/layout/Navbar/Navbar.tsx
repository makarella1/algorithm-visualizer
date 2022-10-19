import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const dropdownAnimation: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 800, damping: 24 },
  },
  closed: { opacity: 0, scale: 0, y: 20, transition: { duration: 0.2 } },
};

export const Navbar = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <nav className="flex h-[8vh] items-center justify-center bg-stone-900 text-white">
      <DropdownMenu.Root open={isOpened} onOpenChange={setIsOpened}>
        <DropdownMenu.Trigger
          className="flex items-center justify-between gap-1 rounded-lg bg-gray-700 p-2 text-sm focus-visible:outline-none"
          asChild
        >
          <motion.button whileTap={{ scale: 0.9 }}>
            <p>Sorting</p>
            <ChevronDownIcon
              className={`transition-transform duration-200 ${
                isOpened ? "rotate-180" : "rotate-0"
              }`}
            />
          </motion.button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          {isOpened && (
            <AnimatePresence>
              <DropdownMenu.Content
                sideOffset={8}
                className="relative w-[200px] cursor-pointer rounded-lg bg-gray-700 p-1 text-sm text-white"
                asChild
              >
                <motion.div
                  variants={dropdownAnimation}
                  initial="closed"
                  animate={isOpened ? "open" : "closed"}
                >
                  <div className="absolute -top-0.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-gray-700" />
                  <NavLink to="/sorting/insertion">
                    <DropdownMenu.Item className="w-full rounded-md px-4 hover:bg-gray-600 focus-visible:outline-none">
                      Insertion sort
                    </DropdownMenu.Item>
                  </NavLink>
                </motion.div>
              </DropdownMenu.Content>
            </AnimatePresence>
          )}
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};
