'use client';

import { Separator as BaseUISeparator } from '@base-ui/react/separator';
import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export type SeparatorProps = ComponentPropsWithoutRef<typeof BaseUISeparator> & {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export function Separator({ orientation = 'horizontal', className, ...props }: SeparatorProps) {
  return <BaseUISeparator orientation={orientation} className={clsx('woken-separator', className)} {...props} />;
}