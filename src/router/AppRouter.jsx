import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { childrenHeroesRoutes, HeroesRoutes } from '../heroes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesRoutes />,
    errorElement: <Navigate to={'/marvel'} />,
    children: childrenHeroesRoutes,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
