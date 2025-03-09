import { ReactNode } from 'react';
import classnames from 'classnames';

export const Container = ({ children, className }: { children: ReactNode, className: string }) => {
  return (
    <section className={classnames('container', className)}>
      {children}
    </section>
  );
}