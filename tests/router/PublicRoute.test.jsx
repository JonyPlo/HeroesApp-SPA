import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pruebas en PublicRoute', () => {
  test('Debe de mostrar el children si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Publica')).toBeTruthy();
  });

  test('Debe de navegar si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Jony',
        id: 'ABC',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path='/' element={<h1>Pagina Principal</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Pagina Principal')).toBeTruthy();
  });
});
