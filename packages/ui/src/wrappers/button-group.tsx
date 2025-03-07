import { ReactNode } from 'react';

const ButtonGroup = ({ children }: { children: ReactNode }) => {
  return (
    <section className="button-group">
      {children}
    </section>
  );
}

export default ButtonGroup;