import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

declare function Root({ className, ...props }: ComponentPropsWithoutRef<'table'>): react.JSX.Element;
declare function Head({ className, ...props }: ComponentPropsWithoutRef<'thead'>): react.JSX.Element;
declare function Body({ className, ...props }: ComponentPropsWithoutRef<'tbody'>): react.JSX.Element;
declare function Row({ className, ...props }: ComponentPropsWithoutRef<'tr'>): react.JSX.Element;
declare function HeaderCell({ className, ...props }: ComponentPropsWithoutRef<'th'>): react.JSX.Element;
declare function Cell({ className, ...props }: ComponentPropsWithoutRef<'td'>): react.JSX.Element;
declare const Table: {
    Root: typeof Root;
    Head: typeof Head;
    Body: typeof Body;
    Row: typeof Row;
    HeaderCell: typeof HeaderCell;
    Cell: typeof Cell;
};

export { Table };
