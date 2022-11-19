import { Layout, ProtectedSortRoute } from '@components';
import { HomePage, SortingPage } from '@pages';
import { ROUTES } from '@utils';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route
        path={`${ROUTES.SORTING}/:sortName`}
        element={
          <ProtectedSortRoute>
            <SortingPage />
          </ProtectedSortRoute>
        }
      />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
