import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from '../widgets/skeleton';
import '@testing-library/jest-dom';

describe('Skeleton Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has default width, height, and borderRadius', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild as HTMLElement;

    expect(skeleton).toHaveStyle({
      width: '100%',
      height: '16px',
      borderRadius: '4px',
    });
  });

  it('applies custom width, height, and borderRadius', () => {
    const { container } = render(<Skeleton width="50px" height="20px" radius="10px" />);
    const skeleton = container.firstChild as HTMLElement;

    expect(skeleton).toHaveStyle({
      width: '50px',
      height: '20px',
      borderRadius: '10px',
    });
  });

  it('applies additional className when provided', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});