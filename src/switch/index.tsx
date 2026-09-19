'use client';

import { Switch as BaseUISwitch } from '@base-ui/react/switch';
import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export type SwitchProps = ComponentPropsWithoutRef<typeof BaseUISwitch.Root> & {
  className?: string;
};

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseUISwitch.Root className={clsx('awake-switch-root', className)} {...props}>
      <BaseUISwitch.Thumb className="awake-switch-thumb" />
    </BaseUISwitch.Root>
  );
}