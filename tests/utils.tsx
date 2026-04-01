import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 创建默认的 QueryClient
function createTestQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
    },
  });
}

// Provider 包装器
interface WrapperProps {
  children: React.ReactNode;
}

function AllProviders({ children }: WrapperProps): React.ReactElement {
  const queryClient = createTestQueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

// 自定义 render 函数
function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(ui, { wrapper: AllProviders, ...options });
}

// 重新导出所有 testing-library 功能
export * from '@testing-library/react';
export { renderWithProviders };