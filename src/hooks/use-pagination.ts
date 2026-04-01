'use client';

import { useState, useCallback } from 'react';

export interface UsePaginationOptions {
  totalItems: number;
  pageSize?: number;
  initialPage?: number;
}

export function usePagination({
  totalItems,
  pageSize = 10,
  initialPage = 1,
}: UsePaginationOptions): {
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
} {
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(pageSize);
  const totalPages = Math.ceil(totalItems / size);

  const nextPage = useCallback(() => setPage((p) => Math.min(p + 1, totalPages)), [totalPages]);
  const prevPage = useCallback(() => setPage((p) => Math.max(p - 1, 1)), []);
  const setPageSize = useCallback((newSize: number) => {
    setSize(newSize);
    setPage(1);
  }, []);

  return {
    page,
    pageSize: size,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
    nextPage,
    prevPage,
    setPage,
    setPageSize,
  };
}