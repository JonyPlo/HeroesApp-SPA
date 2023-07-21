import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
  test('Debe  de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('Debe de mostrar la pagina de bienvenida si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Jony',
        id: '123',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Bienvenido Jony'
    );
  });
});
