import { render } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes component', () => {
  test('renders the quote text', () => {
    const { getByText } = render(<Quotes />);
    const quoteText = getByText('Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. -William Paul Thurston');
    expect(quoteText).toBeInTheDocument();
  });
});
