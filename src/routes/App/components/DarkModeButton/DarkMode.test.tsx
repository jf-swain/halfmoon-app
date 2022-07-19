import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import DarkModeContextProvider from '../../../../context/DarkModeContext';

test('Button has correct initial svg', () => {
  render(<App />);

  const svgDarkMode = screen.getByTestId('svg-darkMode');

  expect(svgDarkMode).toHaveClass('fa-moon');
});

test('Button has correct svg when trigger', async () => {
  render(
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  );

  const toggleButton = screen.getByRole('button', { name: '' });

  fireEvent.click(toggleButton);

  const svgDarkMode = screen.getByTestId('svg-darkMode');

  expect(svgDarkMode).toHaveClass('fa-sun');
});
