import { render, screen } from '@testing-library/react';
import axios from 'axios';
import APOD from '../components/APOD';

// this solved "Cannot use import statement outside a module" error for axios
// https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios

// Mocking axios
jest.mock('axios');

// testing APOD component renders
test('renders APOD component', () => {
  // Mock response data
  const mockData = {
    data: {
      title: 'Astronomy Picture of the Day',
      explanation: 'This is a test explanation',
      url: 'https://images.nasa.gov/1',
    },
  };

  axios.get.mockResolvedValue(mockData);
  console.log('MOCK:', mockData);

  render(<APOD />);
  const linkElement = screen.getByText(/Astronomy Picture of the Day/i);
  expect(linkElement).toBeInTheDocument();
});
