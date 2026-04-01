'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';

export interface InfiniteScrollProps {
  children: ReactNode;
  hasMore: boolean;
  onLoadMore: () => void;
  loading?: boolean;
  threshold?: number;
  loader?: ReactNode;
}

export function InfiniteScroll({
  children,
  hasMore,
  onLoadMore,
  loading = false,
  threshold = 200,
  loader,
}: InfiniteScrollProps): React.ReactElement {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !loading) {
        onLoadMore();
      }
    },
    [hasMore, loading, onLoadMore],
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: `${threshold}px`,
    });

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersect, threshold]);

  return (
    <>
      {children}
      <div ref={loadMoreRef}>
        {loading && (loader || <div className="py-4 text-center text-muted-foreground">加载中...</div>)}
      </div>
    </>
  );
}