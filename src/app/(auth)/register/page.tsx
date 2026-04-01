import Link from 'next/link';
import { RegisterForm } from '@/components/features/auth/register-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '注册 | WebBase',
  description: '创建新账户',
};

export default function RegisterPage(): React.ReactElement {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">注册</h1>
      <RegisterForm />
      <p className="text-center text-sm text-muted-foreground mt-4">
        已有账户？{' '}
        <Link href="/login" className="text-primary hover:underline">
          登录
        </Link>
      </p>
    </>
  );
}