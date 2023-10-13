import Mars from '../components/Mars';
import axios from 'axios';
import { render, screen } from '@testing-library/react';

jest.mock('axios');

test('renders Mars component with static content', () => {
  const mockData = {
    data: {
      photos: [
        {
          id: 1,
          img_src: 'https://images.nasa.gov/1',
          earth_date: '2021-01-01',
          camera: {
            full_name: 'Front Hazard Avoidance Camera',
          },
        },
        {
          id: 2,
          img_src: 'https://images.nasa.gov/2',
          earth_date: '2021-01-02',
          camera: {
            full_name: 'Rear Hazard Avoidance Camera',
          },
        },
      ],
    },
  };

  axios.get.mockResolvedValue(mockData);
  console.log('MOCK:', mockData);

  render(<Mars />);
  const linkElement = screen.getByText(
    /Randomly selected photos from NASA's Mars Rover Photos API./i
  );
  expect(linkElement).toBeInTheDocument();
});
