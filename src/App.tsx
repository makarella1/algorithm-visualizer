import { InsertionSort, Root } from "@components";
import { HomePage, SortingPage } from "@pages";
import { ROUTES } from "@utils";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.SORTING}`,
        element: <SortingPage />,
        children: [
          {
            path: `${ROUTES.INSERTION_SORT}`,
            element: <InsertionSort />,
          },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
