'use client';

import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

function Root({ className, ...props }: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className="table-wrapper">
      <table className={clsx('woken-table', className)} {...props} />
    </div>
  );
}

function Head({ className, ...props }: ComponentPropsWithoutRef<'thead'>) {
  return <thead className={clsx('table-head', className)} {...props} />;
}

function Body({ className, ...props }: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody className={clsx('table-body', className)} {...props} />;
}

function Row({ className, ...props }: ComponentPropsWithoutRef<'tr'>) {
  return <tr className={clsx('table-row', className)} {...props} />;
}

function HeaderCell({ className, ...props }: ComponentPropsWithoutRef<'th'>) {
  return <th className={clsx('table-header-cell', className)} {...props} />;
}

function Cell({ className, ...props }: ComponentPropsWithoutRef<'td'>) {
  return <td className={clsx('table-cell', className)} {...props} />;
}

export { Root, Head, Body, Row, HeaderCell, Cell };
