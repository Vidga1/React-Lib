import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  it('renders main heading', () => {
    render(<App />);
    const mainHeading = screen.getByText('Библиотека React компонентов');
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders horizontal lines', () => {
    render(<App />);
    const lines = screen.getAllByRole('separator');
    expect(lines.length).toBeGreaterThanOrEqual(1);
  });

  it('renders details with headings', () => {
    render(<App />);
    const detailsWithHeadings = screen.getByText('Пример заголовков');
    expect(detailsWithHeadings).toBeInTheDocument();
  });

  it('renders details with images and paragraphs', () => {
    render(<App />);
    const detailsWithImages = screen.getByText(
      'Пример параграфа с картинкой (лев)',
    );
    expect(detailsWithImages).toBeInTheDocument();
  });
});
