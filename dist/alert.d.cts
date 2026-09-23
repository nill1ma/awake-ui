import * as react from 'react';
import { ReactNode } from 'react';

type AlertProps = {
    children: ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    className?: string;
};
declare function Alert({ children, variant, className }: AlertProps): react.JSX.Element;

export { Alert };
