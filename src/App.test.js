import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Apollo map application', () => {
  render(<App />);
  // Check that the floor switcher buttons render (core UI element)
  const floorButton = screen.getByText(/Floor 1/i);
  expect(floorButton).toBeInTheDocument();
});
