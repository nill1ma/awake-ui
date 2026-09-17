'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx('woken-button', `woken-button--${variant}`, className)}
    >
      {children}
    </button>
  );
}