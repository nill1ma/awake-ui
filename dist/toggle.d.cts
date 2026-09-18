import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

type ToggleProps = ComponentPropsWithoutRef<'button'> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
};
declare function Toggle({ checked, onCheckedChange, disabled, className, ...props }: ToggleProps): react.JSX.Element;

export { Toggle, type ToggleProps };
