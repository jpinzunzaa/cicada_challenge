import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container">
      {children}
    </section>
  );
}