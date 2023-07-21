import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pruebas en PrivateRoute', () => {
  // De esta forma puedo simular si se realizo una llamada al local storage, en este caso evaluaremos si se llamo al local storage con el metodo setItem. Tener en cuenta que la implementacion LocalStorage.setItem no funciona, por eso se lo hace con la forma Storage.prototype.setItem
  Storage.prototype.setItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el children si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Jony',
        id: 'ABC',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?queryValue=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Privada')).toBeTruthy();

    // Verifico si el local storage fue llamado con el mock
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?queryValue=batman'
    );
  });

  test('Debe de navegar al login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <h1>Pagina principal</h1>
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<h1>Pagina login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Pagina login')).toBeTruthy();
  });

  // test('Debe de ', () => {
  //   second;
  // });
});
