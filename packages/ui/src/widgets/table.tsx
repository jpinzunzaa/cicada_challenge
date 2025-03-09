'use client';

import { ReactNode } from 'react';
import classnames from 'classnames';

interface TableProps {
  children: ReactNode;
  className?: string;
  columns?: string;
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const Table = ({ children, className, columns }: TableProps) => {
  return (
    <div className={classnames('table-container', className)} style={{ gridTemplateColumns: columns }}>
      {children}
    </div>
  );
};

const TableTitle = ({ children }: TableProps) => {
  return (
    <div className="table-title">
      {children}
    </div>
  );
};

const TableHead = ({ children }: TableProps) => {
  return (
    <div className="table-head">
      <div className="table-wrapper">{children}</div>
    </div>
  );
};

const TableBody = ({ children }: TableProps) => {
  return (
    <div className="table-body">
      <div className="table-wrapper">{children}</div>
    </div>
  );
};

const TableRow = ({ children }: TableProps) => {
  return <div className="table-row">{children}</div>;
};

const TableCell = ({ children, className }: TableCellProps) => {
  return <div className={classnames('table-cell', className)}>{children}</div>;
};

Table.Title = TableTitle;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
