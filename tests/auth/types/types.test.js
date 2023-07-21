import { types } from '../../../src/auth';

describe('Pruebas en types.js', () => {
  test('Debe de regresar los siguientes types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
