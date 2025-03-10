import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../widgets/table';
import '@testing-library/jest-dom';

describe('Table Component', () => {
  it('renders without crashing', () => {
    render(<Table>Test Content</Table>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Table className="custom-table" />);
    expect(container.firstChild).toHaveClass('custom-table');
  });

  it('applies gridTemplateColumns when columns prop is provided', () => {
    const { container } = render(<Table columns="1fr 2fr" />);
    expect(container.firstChild).toHaveStyle('grid-template-columns: 1fr 2fr');
  });
});

describe('Table Subcomponents', () => {
  it('renders TableTitle correctly', () => {
    render(<Table.Title>Table Title</Table.Title>);
    expect(screen.getByText('Table Title')).toBeInTheDocument();
  });

  it('renders TableHead correctly', () => {
    render(<Table.Head>Table Head</Table.Head>);
    expect(screen.getByText('Table Head')).toBeInTheDocument();
  });

  it('renders TableBody correctly', () => {
    render(<Table.Body>Table Body</Table.Body>);
    expect(screen.getByText('Table Body')).toBeInTheDocument();
  });

  it('renders TableRow correctly', () => {
    render(<Table.Row>Table Row</Table.Row>);
    expect(screen.getByText('Table Row')).toBeInTheDocument();
  });

  it('renders TableCell correctly', () => {
    render(<Table.Cell>Table Cell</Table.Cell>);
    expect(screen.getByText('Table Cell')).toBeInTheDocument();
  });

  it('applies className to TableCell', () => {
    const { container } = render(<Table.Cell className="custom-cell">Cell</Table.Cell>);
    expect(container.firstChild).toHaveClass('custom-cell');
  });
});