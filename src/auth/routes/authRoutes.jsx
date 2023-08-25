import { LoginPage } from '../';
import { PublicRoute } from '../../router/PublicRoute';
import ErrorPage from '../../layout/components/ErrorPage';

export const authRoutes = [
  {
    path: 'login',
    element: <PublicRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        element: <LoginPage />,
      },
    ],
  },
];
