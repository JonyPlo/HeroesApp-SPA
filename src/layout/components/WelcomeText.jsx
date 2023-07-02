import { useContext } from 'react';
import { AuthContext } from '../../auth';

export const WelcomeText = () => {
  const { user } = useContext(AuthContext);

  return (
    <h1 className='display-4 mt-4 text-center'>
      Bienvenido {user?.name} a la pagina principal de la App de Heroes
    </h1>
  );
};
