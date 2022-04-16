import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shell trainer title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shell Trainer/i);
  expect(linkElement).toBeInTheDocument();
});
