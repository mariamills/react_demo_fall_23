import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

// Mocking react-router-dom useRouteError hook to return a message
jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(),
}));

test('renders errorNotFound', () => {
  render(<ErrorNotFound />);
  const linkElement = screen.getByText(/an unexpected error has occurred/i);
  expect(linkElement).toBeInTheDocument();
});
