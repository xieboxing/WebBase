import { env } from '@/lib/env';

/**
 * API 错误类型
 */
export class ApiError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data: unknown;

  constructor(status: number, statusText: string, data?: unknown) {
    super(`API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
}

/**
 * 请求配置
 */
export interface RequestConfig extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

/**
 * 默认配置
 */
const DEFAULT_TIMEOUT = 15000; // 15秒
const DEFAULT_RETRIES = 0;
const DEFAULT_RETRY_DELAY = 1000;

/**
 * 获取认证 Token
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  // 从 localStorage 获取 token（或使用 cookie）
  return localStorage.getItem('auth_token');
}

/**
 * 延迟函数
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 处理响应
 */
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType?.includes('application/json');

  if (!response.ok) {
    const errorData = isJson ? await response.json() : await response.text();
    throw new ApiError(response.status, response.statusText, errorData);
  }

  if (response.status === 204) {
    return {} as T;
  }

  if (isJson) {
    return response.json() as Promise<T>;
  }
  return response.text() as unknown as Promise<T>;
}

/**
 * 处理错误
 */
function handleError(error: unknown): never {
  if (error instanceof ApiError) {
    // 401 未授权 - 跳转登录页
    if (error.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
      }
    }
    throw error;
  }

  // 网络错误
  if (error instanceof TypeError && error.message.includes('fetch')) {
    throw new ApiError(0, 'Network Error', '网络连接失败，请检查网络后重试');
  }

  throw error;
}

/**
 * 创建请求函数
 */
async function request<T>(
  url: string,
  config: RequestConfig = {},
): Promise<T> {
  const {
    timeout = DEFAULT_TIMEOUT,
    retries = DEFAULT_RETRIES,
    retryDelay = DEFAULT_RETRY_DELAY,
    headers: customHeaders,
    ...restConfig
  } = config;

  const token = getAuthToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const fullUrl = url.startsWith('http') ? url : `${env.NEXT_PUBLIC_API_BASE_URL}${url}`;

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(fullUrl, {
        ...restConfig,
        headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return await handleResponse<T>(response);
    } catch (error) {
      lastError = error;

      // 如果是中止错误，不重试
      if (error instanceof Error && error.name === 'AbortError') {
        clearTimeout(timeoutId);
        throw new ApiError(408, 'Request Timeout', '请求超时，请稍后重试');
      }

      // 如果不是最后一次尝试，等待后重试
      if (attempt < retries) {
        await delay(retryDelay * (attempt + 1));
      }
    }
  }

  clearTimeout(timeoutId);
  handleError(lastError);
}

/**
 * API Client
 */
export const apiClient = {
  /**
   * GET 请求
   */
  get<T>(url: string, config?: RequestConfig): Promise<T> {
    return request<T>(url, { ...config, method: 'GET' });
  },

  /**
   * POST 请求
   */
  post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return request<T>(url, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  /**
   * PUT 请求
   */
  put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return request<T>(url, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  /**
   * PATCH 请求
   */
  patch<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return request<T>(url, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  /**
   * DELETE 请求
   */
  delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return request<T>(url, { ...config, method: 'DELETE' });
  },
};

export default apiClient;