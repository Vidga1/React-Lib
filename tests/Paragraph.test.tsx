import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Paragraph,
  ParagraphStyles,
  ParagraphExamples,
} from '../src/components/Paragraph/Paragraph';
import {
  textLion,
  textPantera,
  textTiger,
  textWolf,
} from '../src/helpers/text';

describe('Paragraph', () => {
  it('renders with default props', () => {
    render(<Paragraph />);
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement).toHaveTextContent('');
    expect(paragraphElement).toHaveClass(ParagraphStyles.Regular);
  });

  it('renders with custom text and style', () => {
    const customText = 'Custom Text';
    render(<Paragraph text={customText} fontStyle={ParagraphStyles.Bold} />);
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement).toHaveTextContent(customText);
    expect(paragraphElement).toHaveClass(ParagraphStyles.Bold);
  });

  it('renders with children and style', () => {
    const customText = 'Custom Text';
    render(
      <Paragraph fontStyle={ParagraphStyles.Underline}>{customText}</Paragraph>,
    );
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement).toHaveTextContent(customText);
    expect(paragraphElement).toHaveClass(ParagraphStyles.Underline);
  });

  it('renders with default text and custom style', () => {
    render(<Paragraph fontStyle={ParagraphStyles.Quote} />);
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement).toHaveTextContent('');
    expect(paragraphElement).toHaveClass(ParagraphStyles.Quote);
  });
  test('should render paragraphs with different text and styles', () => {
    render(<ParagraphExamples />);

    // Теперь используйте screen.getByText, чтобы найти тексты внутри компонентов Details
    const boldParagraph = screen.getByText(textLion);
    const quoteParagraph = screen.getByText(textPantera);
    const underlineParagraph = screen.getByText(textTiger);
    const regularParagraph = screen.getByText(textWolf);

    // Проверяем, что тексты найдены
    expect(boldParagraph).toBeInTheDocument();
    expect(quoteParagraph).toBeInTheDocument();
    expect(underlineParagraph).toBeInTheDocument();
    expect(regularParagraph).toBeInTheDocument();
  });
});
