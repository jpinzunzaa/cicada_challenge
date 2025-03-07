'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HistoricContext } from '@repo/patterns/contexts/historic-context'

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
      <HistoricContext>
        {children}
      </HistoricContext>
    </QueryClientProvider>
  );
}

export default Main;