'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export type ToggleProps = ComponentPropsWithoutRef<'button'> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export function Toggle({ 
  checked = false, 
  onCheckedChange, 
  disabled = false, 
  className, 
  ...props 
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={clsx(
        'toggle-switch',
        checked && 'toggle-switch--checked',
        disabled && 'toggle-switch--disabled',
        className
      )}
      {...props}
    >
      <span className="toggle-switch-thumb" />
    </button>
  );
}