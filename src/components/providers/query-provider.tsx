'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

interface QueryProviderProps {
  children: ReactNode;
}

function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 数据过期时间 5 分钟
        staleTime: 5 * 60 * 1000,
        // 缓存时间 10 分钟
        gcTime: 10 * 60 * 1000,
        // 重试次数
        retry: 3,
        // 重试延迟（指数退避）
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // 窗口聚焦时重新获取（开发环境启用，生产环境关闭）
        refetchOnWindowFocus: process.env.NODE_ENV === 'development',
        // 重新连接时获取
        refetchOnReconnect: true,
        // 挂载时获取
        refetchOnMount: true,
      },
      mutations: {
        // 变更重试次数
        retry: 1,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient(): QueryClient {
  if (typeof window === 'undefined') {
    // 服务端：每次请求创建新的 QueryClient
    return makeQueryClient();
  }

  // 客户端：复用同一个 QueryClient
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}

export function QueryProvider({ children }: QueryProviderProps): React.ReactElement {
  const queryClient = useState(() => getQueryClient())[0];

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}