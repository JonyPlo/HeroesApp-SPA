import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrarse correctamente con los valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/searc?queryValue=Batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('Batman');

    const img = screen.getByRole('img');
    expect(img.src).toContain('/heroes/dc-batman.jpg');

    const alert_danger = screen.getByTestId('alert-danger');
    expect(alert_danger.className).toContain('d-none');
  });

  test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/searc?queryValue=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert_search_hero = screen.getByTestId('alert-search-hero');
    const alert_danger = screen.getByTestId('alert-danger');

    expect(alert_search_hero.className).toContain('d-none');
    expect(alert_danger.className).not.toContain('d-none');
  });

  test('Debe de llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'Batman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      name: 'searchText',
      target: { value: inputValue },
    });

    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    screen.debug();
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?queryValue=${inputValue}`);
  });
});
