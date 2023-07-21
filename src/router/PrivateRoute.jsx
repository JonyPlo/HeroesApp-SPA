import { useContext, useMemo } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  //Esta logica messirve para guardar el path en el LS en caso de que nos hayamos deslogueado de la pagina y queramos volver a loguearnos, nos redireccione exactamente al mismo punto en el que estabamos navegando antes que cierre la sesion
  const lastPath = useMemo(() => pathname + search, [pathname, search]);
  localStorage.setItem('lastPath', lastPath);

  return logged ? children : <Navigate to={'/login'} />;
};
