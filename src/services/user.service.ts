import type { ApiResponse, PaginatedResponse, ListQueryParams } from '@/types';
import { apiClient } from '@/lib/api-client';

/**
 * 用户信息
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

/**
 * 创建用户参数
 */
export interface CreateUserParams {
  email: string;
  name: string;
  password: string;
  role?: 'admin' | 'user';
}

/**
 * 更新用户参数
 */
export interface UpdateUserParams {
  name?: string;
  avatar?: string;
  role?: 'admin' | 'user';
  status?: 'active' | 'inactive';
}

/**
 * 用户查询参数
 */
export interface UserQueryParams extends ListQueryParams {
  role?: 'admin' | 'user';
  status?: 'active' | 'inactive';
}

/**
 * 用户服务
 */
export const UserService = {
  /**
   * 获取用户列表
   */
  async getList(params?: UserQueryParams): Promise<PaginatedResponse<User>> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.pageSize) searchParams.set('pageSize', String(params.pageSize));
    if (params?.search) searchParams.set('search', params.search);
    if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.set('sortOrder', params.sortOrder);
    if (params?.role) searchParams.set('role', params.role);
    if (params?.status) searchParams.set('status', params.status);

    const query = searchParams.toString();
    const url = query ? `/users?${query}` : '/users';

    const response = await apiClient.get<ApiResponse<PaginatedResponse<User>>>(url);
    return response.data;
  },

  /**
   * 获取单个用户
   */
  async getById(id: string): Promise<User> {
    const response = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return response.data;
  },

  /**
   * 创建用户
   */
  async create(data: CreateUserParams): Promise<User> {
    const response = await apiClient.post<ApiResponse<User>>('/users', data);
    return response.data;
  },

  /**
   * 更新用户
   */
  async update(id: string, data: UpdateUserParams): Promise<User> {
    const response = await apiClient.patch<ApiResponse<User>>(`/users/${id}`, data);
    return response.data;
  },

  /**
   * 删除用户
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};