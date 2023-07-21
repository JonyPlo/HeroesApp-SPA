import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../layout/components/ErrorPage';
import { PublicRoute } from './PublicRoute';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { HeroesRoutes } from '../heroes';

const routesConfig = (
  <>
  {/* Aqui no hace falta encerrar los componentes Route dentro de un Routes, porque la logica de los Routes ya lo agrega el metodo createRoutesFromElements() que se encuentra en el componente AppRouter */}
    <Route
      path='login/*'
      errorElement={<ErrorPage />}
      element={
        <PublicRoute>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
          </Routes>
        </PublicRoute>
      }
    />

    <Route
      path='/*'
      errorElement={<ErrorPage />}
      element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      }
    />
  </>
);

export default routesConfig;
