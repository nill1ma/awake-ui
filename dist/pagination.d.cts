import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

type PaginationProps = ComponentPropsWithoutRef<'nav'> & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
declare function Pagination({ currentPage, totalPages, onPageChange, className, ...props }: PaginationProps): react.JSX.Element;

export { Pagination, type PaginationProps };
