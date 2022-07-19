import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Heading have correct text', () => {
  render(<App />);

  const headingH1 = screen.getByRole('heading', { level: 1 });

  expect(headingH1.textContent).toBe('Isalid Dark Mode');
});
