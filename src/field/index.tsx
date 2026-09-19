'use client';

import { Field as BaseUIField } from '@base-ui/react/field';
import { ComponentProps } from 'react';
import { clsx } from 'clsx';

function Root(props: ComponentProps<typeof BaseUIField.Root>) {
  return <BaseUIField.Root {...props} className={clsx('awake-field-root', props.className)} />;
}

function Label(props: ComponentProps<typeof BaseUIField.Label>) {
  return <BaseUIField.Label {...props} className={clsx('awake-field-label', props.className)} />;
}

function Control(props: ComponentProps<typeof BaseUIField.Control>) {
  return <BaseUIField.Control {...props} className={clsx('awake-field-control', props.className)} />;
}

export const Field = { Root, Label, Control };