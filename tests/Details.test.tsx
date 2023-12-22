import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Details } from '../src/components/Details/Details';

describe('Details', () => {
  it('renders with default title', () => {
    render(<Details />);
    const defaultTitle =
      'Изучим мир хищников: льва, пантеры, тигра и волка, каждый из которых уникален и играет ключевую роль в своей экосистеме.'; // Ваше значение по умолчанию
    const summaryElement = screen.getByText(defaultTitle);
    expect(summaryElement).toBeInTheDocument();
  });

  it('renders with custom title and text', () => {
    const customTitle = 'Custom Title';
    const customText = 'Custom Text';
    render(<Details title={customTitle} text={customText} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.queryByText(customText)).not.toBeInTheDocument(); // Изначально текст не отображается
  });

  it('displays additional content on click', () => {
    const customTitle = 'Custom Title';
    const customText = 'Custom Text';
    render(<Details title={customTitle} text={customText} />);

    const summaryElement = screen.getByText(customTitle);
    fireEvent.click(summaryElement); // Клик по заголовку

    expect(screen.getByText(customText)).toBeInTheDocument(); // Теперь текст должен быть виден
  });
});
