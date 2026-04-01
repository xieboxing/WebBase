'use client';

import { Suspense } from 'react';
import { LoginFormContent } from './login-form-content';
import { Skeleton } from '@/components/ui/skeleton';

export interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps): React.ReactElement {
  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <LoginFormContent className={className} />
    </Suspense>
  );
}

function LoginFormSkeleton(): React.ReactElement {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
}