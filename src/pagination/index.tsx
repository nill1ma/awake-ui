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
      aria-label="Paginação"
      className={clsx('awake-pagination', className)}
      {...props}
    >
      <Button
        variant="secondary"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Página anterior"
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
        aria-label="Próxima página"
      >
        Next
      </Button>
    </nav>
  );
}