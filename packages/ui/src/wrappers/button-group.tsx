import { ReactNode } from 'react';
import { useCustomQuery } from '@repo/patterns/hooks';

const ButtonGroup = ({ children }: { children: ReactNode }) => {

  const { data, isLoading, error } = useCustomQuery({
    key: ["pairs"],
    url: "/pairs",
    options: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(data)
      }
    },
  });

  return (
    <section className="button-group">
      {children}
    </section>
  );
}

export default ButtonGroup;