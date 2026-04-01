'use client';

import { useEffect, useRef } from 'react';

export function useScrollLock(lock = true): void {
  const scrollRef = useRef(false);

  useEffect(() => {
    if (lock && !scrollRef.current) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      scrollRef.current = true;
      return () => {
        document.body.style.overflow = originalStyle;
        scrollRef.current = false;
      };
    }
  }, [lock]);
}