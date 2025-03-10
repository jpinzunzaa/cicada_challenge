import React from 'react';
import { render } from '@testing-library/react';
import Columns from '../widgets/columns';
import '@testing-library/jest-dom';

describe('Columns Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Columns>Test Content</Columns>);
    expect(container).toBeInTheDocument();
  });

  it('applies the correct default class', () => {
    const { container } = render(<Columns>Test Content</Columns>);
    expect(container.firstChild).toHaveClass('columns-container');
  });

  it('applies additional className if provided', () => {
    const { container } = render(<Columns className="custom-class">Test Content</Columns>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Columns>Test Content</Columns>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('sets the correct CSS variables for column sizes', () => {
    const { container } = render(<Columns sm={12} md={8} lg={6} xl={4}>Test</Columns>);
    const div = container.firstChild as HTMLElement;

    expect(div.style.getPropertyValue('--cols-mobile')).toBe('12');
    expect(div.style.getPropertyValue('--cols-tablet-v')).toBe('8');
    expect(div.style.getPropertyValue('--cols-tablet-h')).toBe('6');
    expect(div.style.getPropertyValue('--cols-desktop')).toBe('4');
  });
});