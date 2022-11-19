import { isSortNameValid, ROUTES } from '@utils';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const ProtectedSortRoute = ({ children }: React.PropsWithChildren) => {
  const { sortName } = useParams();

  if (!isSortNameValid(sortName!)) {
    return <Navigate to={`${ROUTES.SORTING}/insertion`} />;
  }

  return <>{children}</>;
};
