'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={query_client}>
      {children}
    </QueryClientProvider>
  );
}

export default Main;