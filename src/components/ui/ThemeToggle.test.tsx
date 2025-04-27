import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../store/themeStore';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle Component', () => {
  it('should render the toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should toggle the theme when clicked', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    // Check if the theme toggled (you can expand this based on your implementation)
    expect(document.body.classList.contains('dark')).toBe(true);
  });
});