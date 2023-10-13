import IndexRoute from '../components/IndexRoute';
import { render, screen } from '@testing-library/react';

test('renders IndexRoute component with static content', () => {
  render(<IndexRoute />);
  const linkElement = screen.getByText(/Welcome Space Explorer!./i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Astro Picture of the Day/i);
  expect(buttonElement).toBeInTheDocument();

  const buttonElement2 = screen.getByText(/Mars Rover Photo/i);
  expect(buttonElement2).toBeInTheDocument();
});
