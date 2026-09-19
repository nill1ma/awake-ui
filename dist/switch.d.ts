import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { Switch as Switch$1 } from '@base-ui/react/switch';

type SwitchProps = ComponentPropsWithoutRef<typeof Switch$1.Root> & {
    className?: string;
};
declare function Switch({ className, ...props }: SwitchProps): react.JSX.Element;

export { Switch, type SwitchProps };
