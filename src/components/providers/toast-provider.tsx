'use client';

import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export { toast };

export function ToastProvider(): React.ReactElement {
  return <Toaster position="top-right" richColors closeButton />;
}