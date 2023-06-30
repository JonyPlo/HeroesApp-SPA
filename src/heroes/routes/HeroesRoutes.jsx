import { Outlet } from 'react-router-dom';
import { Navbar } from '../../layout';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};
