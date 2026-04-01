import type { ApiResponse } from '@/types';
import { apiClient } from '@/lib/api-client';

/**
 * 登录参数
 */
export interface LoginParams {
  email: string;
  password: string;
}

/**
 * 登录响应
 */
export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
  };
}

/**
 * 注册参数
 */
export interface RegisterParams {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

/**
 * 认证服务
 */
export const AuthService = {
  /**
   * 登录
   */
  async login(params: LoginParams): Promise<LoginResponse> {
    const response = await apiClient.post<ApiResponse<LoginResponse>>('/auth/login', params);
    return response.data;
  },

  /**
   * 注册
   */
  async register(params: RegisterParams): Promise<LoginResponse> {
    const response = await apiClient.post<ApiResponse<LoginResponse>>('/auth/register', params);
    return response.data;
  },

  /**
   * 登出
   */
  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
  },

  /**
   * 刷新 Token
   */
  async refreshToken(): Promise<{ token: string }> {
    const response = await apiClient.post<ApiResponse<{ token: string }>>('/auth/refresh');
    return response.data;
  },

  /**
   * 获取当前用户信息
   */
  async getCurrentUser(): Promise<LoginResponse['user']> {
    const response = await apiClient.get<ApiResponse<LoginResponse['user']>>('/auth/me');
    return response.data;
  },
};