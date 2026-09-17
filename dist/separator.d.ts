import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { Separator as Separator$1 } from '@base-ui/react/separator';

type SeparatorProps = ComponentPropsWithoutRef<typeof Separator$1> & {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
};
declare function Separator({ orientation, className, ...props }: SeparatorProps): react.JSX.Element;

export { Separator, type SeparatorProps };
