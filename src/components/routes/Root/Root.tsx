import { Outlet } from "react-router-dom";

import { Navbar } from "../../layout";

export const Root = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
