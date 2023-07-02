import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import ErrorPage from '../layout/components/ErrorPage';
import { PublicRoute } from './PublicRoute';

// Esta es la nueva sintaxis de react router DOMException, v6.4, y para poder usar la sintaxis JSX necesitamos si o si el metodo createRoutesFromElements() que es el que nos permitira poner dentro los elementos JSX, por otra parte este metodo ya incluye o ya usa el componente Routes internamente asi que no hace falta usarlo, pero si usamos el componente Route en otro lado que no sea dentro de createRoutesFromElements entonces si hace falta usar el componente Routes para poner los componentes Route dentro
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/*'
        errorElement={<ErrorPage />}
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path='/login'
        errorElement={<ErrorPage />}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      ></Route>
    </>
  )
);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
