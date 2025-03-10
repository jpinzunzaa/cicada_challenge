import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from '../wrappers/button-group';
import '@testing-library/jest-dom';

describe('ButtonGroup Component', () => {
  it('renders without crashing', () => {
    render(<ButtonGroup>Test Button Group</ButtonGroup>);
    expect(screen.getByText('Test Button Group')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
        <button>Button 2</button>
      </ButtonGroup>
    );

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('has the correct className', () => {
    const { container } = render(<ButtonGroup>Test</ButtonGroup>);
    expect(container.firstChild).toHaveClass('button-group');
  });
});