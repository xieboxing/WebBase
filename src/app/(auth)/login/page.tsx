import Link from 'next/link';
import { LoginForm } from '@/components/features/auth/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '登录 | WebBase',
  description: '登录您的账户',
};

export default function LoginPage(): React.ReactElement {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">登录</h1>
      <LoginForm />
      <p className="text-center text-sm text-muted-foreground mt-4">
        还没有账户？{' '}
        <Link href="/register" className="text-primary hover:underline">
          注册
        </Link>
      </p>
    </>
  );
}