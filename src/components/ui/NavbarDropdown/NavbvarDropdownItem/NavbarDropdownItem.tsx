import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";

interface NavbarDropdownItemProps {
  path: string;
  name: string;
}

export const NavbarDropdownItem = ({ path, name }: NavbarDropdownItemProps) => (
  <NavLink to={path}>
    <DropdownMenu.Item className="w-full rounded-md px-4 transition-colors duration-150 hover:bg-gray-800 focus-visible:outline-none">
      {name}
    </DropdownMenu.Item>
  </NavLink>
);
