import * as react from 'react';
import { ReactNode } from 'react';

type AlertProps = {
    children: ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
};
declare function Alert({ children, variant }: AlertProps): react.JSX.Element;

export { Alert };
