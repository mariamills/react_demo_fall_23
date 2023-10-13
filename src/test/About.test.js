import { render, screen } from '@testing-library/react';
import About from '../components/About';

// testing about component renders
test('renders about', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/View on GitHub/i);
  expect(buttonElement).toBeInTheDocument();
});
