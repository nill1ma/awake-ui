'use client';

import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { clsx } from 'clsx';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, variant = 'primary', className, onClick, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx('awake-button', `awake-button--${variant}`, className)}
    >
      {children}
    </button>
  );
}