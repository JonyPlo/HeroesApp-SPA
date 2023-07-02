import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, WelcomeText } from '../../layout';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import ErrorPage from '../../layout/components/ErrorPage';

export const HeroesRoutes = () => {
  let { pathname } = useLocation();
  const homePagePath = pathname === '/';

  return (
    <>
      <Navbar />
      {homePagePath && <WelcomeText />}
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:heroId' element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};
