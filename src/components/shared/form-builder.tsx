'use client';

import { useForm, type UseFormReturn, type FieldValues, type UseFormProps } from 'react-hook-form';

export interface UseFormBuilderProps<T extends FieldValues = FieldValues> {
  defaultValues?: Partial<T>;
}

/**
 * 通用表单 Hook，简化 React Hook Form 的使用
 * 配合 Zod 校验请在组件内直接使用 useForm + zodResolver
 */
export function useFormBuilder<T extends FieldValues = FieldValues>({
  defaultValues,
}: UseFormBuilderProps<T>): UseFormReturn<T> {
  return useForm<T>({
    defaultValues: defaultValues as UseFormProps<T>['defaultValues'],
  });
}