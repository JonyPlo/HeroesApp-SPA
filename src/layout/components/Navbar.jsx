import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>
      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          {/* Por defecto la libreria React Router Dom agrega la clase active a los componentes NavLink que coincidan con la ruta del navegador.
          La propiedad "end" pertenece al componente NavLink y hace que la clase active solo se agregue al componente cuando el final de la cadena de la ruta en el navegador coincida con la ruta del componente, es decir, si la ruta del componente es /marvel y la ruta del navegador termina en /marvel, eso es true, por lo tanto se agregara la clase active al componente, pero si la ruta del navegador termina con /marvel/123 eso es false, por lo tanto se quitara la clase active */}
          <NavLink end className='nav-item nav-link' to='/marvel'>
            Marvel
          </NavLink>
          <NavLink end className='nav-item nav-link' to='/dc'>
            DC
          </NavLink>
          <NavLink end className='nav-item nav-link' to='/search'>
            Search
          </NavLink>
          {/* Aqui abajo estan los mismos links pero con la logica del className para agregar la clase active si realmente la ruta del navegador coincide con la del componente NavLink, podemos agregar esta logica si no confiamos en que la libreria agregara esa clase automaticamente por nosotros */}
          {/* <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/dc'
          >
            DC
          </NavLink> */}
        </div>
      </div>
      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>Jonathan</span>
          <button onClick={onLogout} className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
