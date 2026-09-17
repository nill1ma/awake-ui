'use client';

import { Dialog as BaseUIDialog } from '@base-ui/react/dialog';
import { ComponentProps } from 'react';
import { clsx } from 'clsx';

function Root(props: ComponentProps<typeof BaseUIDialog.Root>) {
  return <BaseUIDialog.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseUIDialog.Trigger>) {
  return <BaseUIDialog.Trigger className={clsx('woken-dialog-trigger', className)} {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseUIDialog.Backdrop>) {
  return <BaseUIDialog.Backdrop className={clsx('woken-dialog-backdrop', className)} {...props} />;
}

function Popup({ className, ...props }: ComponentProps<typeof BaseUIDialog.Popup>) {
  return <BaseUIDialog.Popup className={clsx('woken-dialog-popup', className)} {...props} />;
}

function Title({ className, ...props }: ComponentProps<typeof BaseUIDialog.Title>) {
  return <BaseUIDialog.Title className={clsx('woken-dialog-title', className)} {...props} />;
}

function Description({ className, ...props }: ComponentProps<typeof BaseUIDialog.Description>) {
  return <BaseUIDialog.Description className={clsx('woken-dialog-description', className)} {...props} />;
}

function Close({ className, ...props }: ComponentProps<typeof BaseUIDialog.Close>) {
  return <BaseUIDialog.Close className={clsx('woken-dialog-close', className)} {...props} />;
}

export const Dialog = {
  Root,
  Trigger,
  Portal: BaseUIDialog.Portal, // não precisa de estilo próprio, só reexporta
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
};