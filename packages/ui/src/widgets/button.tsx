'use client';

import { ReactNode } from 'react';
import classnames from 'classnames';

interface ButtonProps {
  key?: string | number;
  children: ReactNode;
  className?: string;
  onClick: () => void;
  active?: boolean;
}

export const Button = ({ children, className, onClick, active = false }: ButtonProps) => {
  return (
    <button className={classnames('button', className, { 'active': active })} onClick={onClick}>
      {children}
    </button>
  );
}