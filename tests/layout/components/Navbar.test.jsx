import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/layout/components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';

const mockedUseNavigate = jest.fn();

// Lo que estoy haciendo en este mock es realizar un mock de todo lo que venga de la libreria react-router-dom, asi que todo lo que extraigamos en la desestructuracion del import sera sobrescrito por funciones mock
jest.mock('react-router-dom', () => ({
  // Con ...jest.requireActual('react-router-dom') estoy diciendo que tome todo lo que exporta la libreria react- router-dom, lo esparza con el operador spread, pero solo vamos a sobrescribir el useNavigate, en otras palabras, todo lo que se exporta de react-router-dom se mantendra normal y lo unico que sera reemplazado o sobrescrito por una funcion mock sera el useNavigate
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar/>', () => {
  const contextValue = {
    logged: true,
    user: {
      name: 'Jony',
      id: 'ABC',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Jony')).toBeTruthy();
  });

  test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
