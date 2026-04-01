'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export function useIntersectionObserver(
  options?: IntersectionObserverInit,
): { ref: RefObject<HTMLDivElement | null>; isIntersecting: boolean } {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}