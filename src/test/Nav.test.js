import Nav from '../components/Nav';
import { render, screen } from '@testing-library/react';

test('renders Nav component', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(/About/i);
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText(/APOD/i);
  expect(linkElement3).toBeInTheDocument();

  const linkElement4 = screen.getByText(/Mars/i);
  expect(linkElement4).toBeInTheDocument();
});
