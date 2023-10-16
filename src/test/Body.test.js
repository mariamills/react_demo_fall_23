import { render, screen, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import Body from '../components/Body';
// Mocking axios
jest.mock('axios');

// testing Body component renders
test('renders Body component', async () => {
  // Mock response data
  const mockData = {
    data: {
      avatar: 'https://example.com/avatar.png',
    },
  };

  axios.get.mockResolvedValue(mockData);

  await act(async () => {
    render(<Body />);
  });

  const linkElement = screen.getByText(/Body/i);
  expect(linkElement).toBeInTheDocument();
});

test('increments count on button click', async () => {
  // Mock response data
  const mockData = {
    data: {
      avatar: 'https://example.com/avatar.png',
    },
  };

  axios.get.mockResolvedValue(mockData);
  console.log('MOCK:', mockData);

  await act(async () => {
    render(<Body />);
  });

  const button = screen.getByText(/0/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent('1');
});
