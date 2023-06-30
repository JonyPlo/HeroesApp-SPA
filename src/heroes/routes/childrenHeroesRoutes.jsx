import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const childrenHeroesRoutes = [
  {
    path: 'marvel',
    element: <MarvelPage />,
  },
  {
    path: 'dc',
    element: <DcPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'hero/:heroId',
    element: <HeroPage />,
  },
];
