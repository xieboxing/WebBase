'use client';

import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions } from '@tanstack/react-query';
import { UserService, type User, type CreateUserParams, type UpdateUserParams, type UserQueryParams } from '@/services/user.service';
import type { PaginatedResponse } from '@/types';
import { ApiError } from '@/lib/api-client';

/**
 * 用户查询 Keys
 */
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (params?: UserQueryParams) => [...userKeys.lists(), params] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

/**
 * 获取用户列表 Hook
 */
export function useUsers(
  params?: UserQueryParams,
  options?: Omit<UseQueryOptions<PaginatedResponse<User>, ApiError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery({
    queryKey: userKeys.list(params),
    queryFn: () => UserService.getList(params),
    ...options,
  });
}

/**
 * 获取单个用户 Hook
 */
export function useUser(
  id: string,
  options?: Omit<UseQueryOptions<User, ApiError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => UserService.getById(id),
    enabled: !!id,
    ...options,
  });
}

/**
 * 创建用户 Hook
 */
export function useCreateUser(
  options?: Omit<UseMutationOptions<User, ApiError, CreateUserParams>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserParams) => UserService.create(data),
    onSuccess: () => {
      // 使列表缓存失效，触发重新获取
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
    ...options,
  });
}

/**
 * 更新用户 Hook（带乐观更新）
 */
export function useUpdateUser(
  options?: Omit<UseMutationOptions<User, ApiError, { id: string; data: UpdateUserParams }>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserParams }) => UserService.update(id, data),
    // 乐观更新
    onMutate: async ({ id, data }) => {
      // 取消正在进行的查询
      await queryClient.cancelQueries({ queryKey: userKeys.detail(id) });

      // 获取当前数据
      const previousUser = queryClient.getQueryData<User>(userKeys.detail(id));

      // 乐观更新
      if (previousUser) {
        queryClient.setQueryData<User>(userKeys.detail(id), {
          ...previousUser,
          ...data,
          updatedAt: new Date().toISOString(),
        });
      }

      return { previousUser };
    },
    // 错误时回滚
    onError: (error, { id }, context) => {
      const ctx = context as { previousUser?: User } | undefined;
      if (ctx?.previousUser) {
        queryClient.setQueryData(userKeys.detail(id), ctx.previousUser);
      }
    },
    // 成功后刷新列表
    onSettled: (data, error, { id }) => {
      queryClient.invalidateQueries({ queryKey: userKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
    ...options,
  });
}

/**
 * 删除用户 Hook
 */
export function useDeleteUser(
  options?: Omit<UseMutationOptions<void, ApiError, string>, 'mutationFn'>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => UserService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
    ...options,
  });
}