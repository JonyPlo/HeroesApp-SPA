import { AuthContext } from './AuthContext';
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// El initialState ya no es necesario porque ahora la funcion init se encargara de setear el estado inicial en base a lo que haya guardado en el local storage
// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //Este return es el valor por defecto del initial state, en este caso, al recargar la pagina seria el valor inicial del state authState
  return {
    logged: Boolean(user),
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name };
    const action = { type: types.login, payload: user };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        //Methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
