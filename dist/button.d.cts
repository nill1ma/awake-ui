import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: 'primary' | 'secondary';
};
declare function Button({ children, variant, className, ...props }: ButtonProps): react.JSX.Element;

export { Button, type ButtonProps };
