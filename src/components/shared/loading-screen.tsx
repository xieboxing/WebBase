import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingScreenProps {
  message?: string;
  className?: string;
}

export function LoadingScreen({ message = '加载中...', className }: LoadingScreenProps): React.ReactElement {
  return (
    <div className={cn('fixed inset-0 flex flex-col items-center justify-center bg-background z-50', className)}>
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="mt-4 text-muted-foreground">{message}</p>
    </div>
  );
}