import { ReactNode } from 'react';

type AlertProps = {
    children: ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
}

export function Alert({ children, variant = 'info' }: AlertProps) {
    return <div className={`alert alert--${variant}`}>{children}</div>
}