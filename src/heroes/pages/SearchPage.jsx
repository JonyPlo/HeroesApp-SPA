import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Usamos la libreria "query-string" para que esta misma parsee o extraiga los valores de la URL que se mandan como query params o parametros despues del signo de pregunta, por ejemplo, si mi URL tiene este query param "?query=superman" entonces la libreria parseara esa cadena de texto convirtiendola en un objeto con propiedades, en este caso me devolvera este objeto {query: "superman"}
  const { queryValue = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(queryValue);

  const showSearch = queryValue.length === 0; // Esta condicion ya regresa un valor booleano
  const showError = queryValue.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: queryValue,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // Lo que hacemos dentro de navigate es asignar al final de la url actual la query "?queryValue=${searchText}", y como solo estamos asignando una query y no una nueva ruta como por ejemplo "/marvel" la ruta de la pagina se mantiene, asi que no nos lleva a otra pagina pero si se actualiza la pagina actual asignandole tambien la query que pusimos en el navigate
    navigate(`?queryValue=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-3'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {/* OPCION 1 */}
          {/* {q === '' ? (
            <div className='alert alert-primary'>Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className='alert alert-danger'>
                No hero with <b>{q}</b>
              </div>
            )
          )} */}
          {/* OPCION 2 - LA MEJOR OPCION */}
          <div
            className={`alert alert-primary animate__animated animate__fadeIn ${
              showSearch ? '' : 'd-none'
            }`}
          >
            Search a hero
          </div>
          <div
            className={`alert alert-danger animate__animated animate__fadeIn ${
              showError ? '' : 'd-none'
            }`}
          >
            No hero with <b>{queryValue}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
