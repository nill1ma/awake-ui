import { ReactNode } from 'react';
import { clsx } from 'clsx';

type AlertProps = {
    children: ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    className?: string;
}

export function Alert({ children, variant = 'info', className }: AlertProps) {
    return <div className={clsx('awake-alert', `awake-alert--${variant}`, className)}>{children}</div>
}