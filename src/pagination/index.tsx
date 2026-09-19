'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { Button } from '../button';

export type PaginationProps = ComponentPropsWithoutRef<'nav'> & {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={clsx('awake-pagination', className)}
      {...props}
    >
      <Button
        variant="secondary"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        Previous
      </Button>

      <span className="awake-pagination-info">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="secondary"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        Next
      </Button>
    </nav>
  );
}