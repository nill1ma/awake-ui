import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { Switch as Switch$1 } from '@base-ui/react/switch';

type SwitchProps = ComponentPropsWithoutRef<typeof Switch$1.Root> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
};
declare function Switch({ checked, onCheckedChange, disabled, className, ...props }: SwitchProps): react.JSX.Element;

export { Switch, type SwitchProps };
