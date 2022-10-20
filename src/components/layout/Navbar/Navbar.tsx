import { NavbarDropdown, NavbarDropdownItem } from "@ui";
import { ROUTES, SORT_TYPES } from "@utils";
import { nanoid } from "nanoid";

export const Navbar = () => {
  return (
    <nav className="flex h-[8vh] items-center justify-center">
      <NavbarDropdown>
        {SORT_TYPES.map(({ slug, name }) => (
          <NavbarDropdownItem
            path={`${ROUTES.SORTING}${slug}`}
            name={name}
            key={nanoid()}
          />
        ))}
      </NavbarDropdown>
    </nav>
  );
};
