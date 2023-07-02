import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = JSON.parse(localStorage.getItem('lastPath')) || '/';

    login('Jonathan Plodzien');

    // La opcion "replace" hace que cuando el navigate redirija a la ruta especificada, la ruta actual sea reemplazada por la ruta que especificamos en el navigate, por lo tanto cuando tratemos de volver atras en el navegador, no se podra o dara falsos negativos, porque en el stack del historial la ruta anterior fue reemplazada por la que especificamos en el navigate. En caso contrario si no se agrega esta opcion, lo que hara el navegador es guardar la ruta actual en un stack de historial de navegacion y recien redireccionar a la ruta especificada dentro del navigate, por lo tanto cuando presionemos el boton para volver atras en el navegador, la ruta anterior estara guardada en ese stack, por lo tanto se podra volver a la pagina anterior sin problema. La opcion "replace" se usa en casos como login o logout, ya que si nos logueamos y luego volvemos atras, el navegador volveria a una pagina en la que aun no iniciamos sesion, cuando en realidad ya estamos logueados, y si nos deslogueamos y luego volvemos atras con el navegador, volveriamos a una pagina en la que estamos logueados cuando en teoria ya no estamos logueados, y para evitar esto podemos usar esta opcion.

    navigate(lastPath, { replace: true });
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
