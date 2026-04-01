'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BackToTopProps {
  threshold?: number;
  className?: string;
}

export function BackToTop({ threshold = 300, className }: BackToTopProps): React.ReactElement | null {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!show) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn('fixed bottom-6 right-6 z-50 rounded-full shadow-lg', className)}
      aria-label="回到顶部"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}