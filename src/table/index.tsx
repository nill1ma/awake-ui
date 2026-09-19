'use client';

import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

function Root({ className, ...props }: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className="awake-table-wrapper">
      <table className={clsx('awake-table', className)} {...props} />
    </div>
  );
}

function Head({ className, ...props }: ComponentPropsWithoutRef<'thead'>) {
  return <thead className={clsx('awake-table-head', className)} {...props} />;
}

function Body({ className, ...props }: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody className={clsx('awake-table-body', className)} {...props} />;
}

function Row({ className, ...props }: ComponentPropsWithoutRef<'tr'>) {
  return <tr className={clsx('awake-table-row', className)} {...props} />;
}

function HeaderCell({ className, ...props }: ComponentPropsWithoutRef<'th'>) {
  return <th className={clsx('awake-table-header-cell', className)} {...props} />;
}

function Cell({ className, ...props }: ComponentPropsWithoutRef<'td'>) {
  return <td className={clsx('awake-table-cell', className)} {...props} />;
}

export const Table = { Root, Head, Body, Row, HeaderCell, Cell };