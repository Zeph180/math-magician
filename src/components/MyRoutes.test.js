import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

describe('MyRoutes', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <MyRoutes />
      </MemoryRouter>,
    );
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders the Home component by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MyRoutes />
      </MemoryRouter>,
    );
    const homeElement = screen.getByText(/Welcome to our page/);
    expect(homeElement).toBeInTheDocument();
  });

  it('renders the Calculator component when the calculator path is visited', () => {
    render(
      <MemoryRouter initialEntries={['/calculator']}>
        <MyRoutes />
      </MemoryRouter>,
    );
    const calculatorElement = screen.getByText(/calculator/i);
    expect(calculatorElement).toBeInTheDocument();
  });

  it('renders the Quotes component when the quotes path is visited', () => {
    render(
      <MemoryRouter initialEntries={['/quotes']}>
        <MyRoutes />
      </MemoryRouter>,
    );
    const quotesElement = screen.getByText(/Mathematics/i);
    expect(quotesElement).toBeInTheDocument();
  });
});
