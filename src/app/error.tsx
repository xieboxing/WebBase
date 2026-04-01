'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.ReactElement {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-semibold">出错了</h2>
      <p className="text-muted-foreground mt-2 text-center max-w-md">
        {error.message || '发生了未知错误，请稍后重试。'}
      </p>
      <Button onClick={reset} className="mt-6">
        重试
      </Button>
    </Container>
  );
}