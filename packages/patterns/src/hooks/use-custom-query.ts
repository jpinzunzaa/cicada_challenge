import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { api } from '@repo/utils/axios';
import { useMemo } from 'react';

type QueryOptions<Data = any, Error = unknown> = {
  key: QueryKey;
  url: string;
  config?: AxiosRequestConfig;
  options?: Omit<UseQueryOptions<Data, Error>, 'queryKey' | 'queryFn'> & {
    onSuccess?: (data: Data) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
  };
};

export const useCustomQuery = <Data = any, Error = unknown>({
  key,
  url,
  options = {},
  config = {},
}: QueryOptions<Data, Error>) => {

  const query_options = useMemo(() => ({
    queryKey: key,
    queryFn: async () => {
      try {
        const response = await api.get(url, {
          ...config,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            ...config?.headers,
          },
        });

        if (options.onSuccess) {
          options.onSuccess(response.data);
        }

        return response.data;
      } catch (error: any) {
        if (options.onError) {
          options.onError(error);
        }
        throw error;
      } finally {
        if (options.onSettled) {
          options.onSettled();
        }
      }
    },
    ...options,
  }), [key, url, config, options]);

  return useQuery<Data, Error>(query_options);
}