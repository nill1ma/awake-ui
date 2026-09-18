'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import {Switch as BaseUISwitch} from '@base-ui/react/switch'
export type SwitchProps = ComponentPropsWithoutRef<typeof BaseUISwitch.Root> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Switch({ 
  checked = false, 
  onCheckedChange, 
  disabled = false, 
  className, 
  ...props 
}: SwitchProps) {
  return (
    // <label className="flex items-center gap-2 text-sm font-normal text-neutral-950 dark:text-white">
      <BaseUISwitch.Root
        defaultChecked
        className="switch-root"
      >
        <BaseUISwitch.Thumb className="switch-thumb" />
      </BaseUISwitch.Root>
    //   Notifications
    // </label>
 

  //   <button
  //     type="button"
  //     role="switch"
  //     aria-checked={checked}
  //     disabled={disabled}
  //     onClick={() => onCheckedChange?.(!checked)}
  //     className={clsx(
  //       'toggle-switch',
  //       checked && 'toggle-switch--checked',
  //       disabled && 'toggle-switch--disabled',
  //       className
  //     )}
  //     {...props}
  //   >
  //     <span className="toggle-switch-thumb" />
  //   </button>
  );
}