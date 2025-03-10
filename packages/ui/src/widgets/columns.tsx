import { ReactNode } from 'react';
import classnames from 'classnames';

interface ColumnsProps {
  children: ReactNode;
  className?: string;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Columns = ({
  children,
  className = '',
  sm = 12,
  md = 6,
  lg = 4,
  xl = 3,
}: ColumnsProps) => {
  return (
    <div
      className={classnames('columns-container', className)}
      style={{
        '--cols-mobile': sm,
        '--cols-tablet-v': md,
        '--cols-tablet-h': lg,
        '--cols-desktop': xl,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export default Columns;
