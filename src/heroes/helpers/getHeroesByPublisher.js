import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publishers) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publishers)) {
    throw new Error(`${publishers} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publishers);
};
