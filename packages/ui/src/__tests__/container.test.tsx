import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from '../wrappers/container';
import '@testing-library/jest-dom';

describe('Container Component', () => {
  it('renders without crashing', () => {
    render(<Container className="custom-class">Test Container</Container>);
    expect(screen.getByText('Test Container')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Container className="custom-class">
        <p>Child Element</p>
      </Container>
    );

    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    const { container } = render(<Container className="custom-class">Test</Container>);
    expect(container.firstChild).toHaveClass('container');
    expect(container.firstChild).toHaveClass('custom-class');
  });
});