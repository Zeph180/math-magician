import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/welcome to our page/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it('renders the first paragraph', () => {
    render(<Home />);
    const firstParagraphElement = screen.getByText(/Lorem Ipsum is simply dummy text of the printing and typesetting/i);
    expect(firstParagraphElement).toBeInTheDocument();
  });

  it('renders the second paragraph', () => {
    render(<Home />);
    const secondParagraphElement = screen.getByText(/Lorem Ipsum is simply dummy text of the printing and typesetting/);
    expect(secondParagraphElement).toBeInTheDocument();
  });
});
