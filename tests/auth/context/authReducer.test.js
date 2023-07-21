import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  const initialState = {
    logged: false,
  };

  const user = {
    id: 'ABC',
    name: 'Jonathan',
  };

  test('debe de retornar el estado por defecto', () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual({
      logged: false,
    });
  });

  test('Debe de (login) llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: user,
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true,
      user,
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
