import { types } from '../types/types';

//Recordar que una funcion reducer es una funcion pura que no llaman recursos externos como por ejemplo metodos, API externa, funciones, etc. esto incluye llamar al local storage, llamar a axios o fetch
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
