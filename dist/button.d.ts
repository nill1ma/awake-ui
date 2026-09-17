import * as react from 'react';
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: 'primary' | 'secondary';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare function Button({ children, variant, className, onClick, ...props }: ButtonProps): react.JSX.Element;

export { Button, type ButtonProps };
