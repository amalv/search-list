import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/list of construction companies/i);
  expect(linkElement).toBeInTheDocument();
});
