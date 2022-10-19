import { PageLayout } from "@components";
import { Outlet, useParams } from "react-router-dom";

export const SortingPage = () => {
  const params = useParams();

  const sortName = Object.keys(params);

  return (
    <PageLayout>
      {sortName}
      <Outlet />
    </PageLayout>
  );
};
