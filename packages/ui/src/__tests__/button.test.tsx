import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../widgets/button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button onClick={() => {}}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const handle_click = jest.fn();
    render(<Button onClick={handle_click}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handle_click).toHaveBeenCalledTimes(1);
  });

  it('applies additional class names', () => {
    render(<Button className="extra-class" onClick={() => {}}>Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('extra-class');
  });

  it('disables the button when active is true', () => {
    render(<Button active={true} onClick={() => {}}>Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('has the "active" class when active is true', () => {
    render(<Button active={true} onClick={() => {}}>Click me</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('active');
  });
});