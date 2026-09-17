'use client';

import { Select as BaseUISelect } from '@base-ui/react/select';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';

function Root(props: ComponentProps<typeof BaseUISelect.Root>) {
  return <BaseUISelect.Root {...props} />;
}

function Label(props: ComponentProps<typeof BaseUISelect.Label>) {
  return <BaseUISelect.Label {...props} className={clsx('select-label', props.className)} />;
}

function Trigger(props: ComponentProps<typeof BaseUISelect.Trigger>) {
  return <BaseUISelect.Trigger {...props} className={clsx('select-trigger', props.className)} />;
}

function Value(props: ComponentProps<typeof BaseUISelect.Value>) {
  return <BaseUISelect.Value {...props} className={clsx('select-value', props.className)} />;
}

function Icon(props: ComponentProps<typeof BaseUISelect.Icon>) {
  return <BaseUISelect.Icon {...props} className={clsx('select-icon', props.className)} />;
}

function Portal(props: ComponentProps<typeof BaseUISelect.Portal>) {
  return <BaseUISelect.Portal {...props} />;
}

function Positioner(props: ComponentProps<typeof BaseUISelect.Positioner>) {
  return <BaseUISelect.Positioner {...props} className={clsx('select-positioner', props.className)} />;
}

function Popup(props: ComponentProps<typeof BaseUISelect.Popup>) {
  return <BaseUISelect.Popup {...props} className={clsx('select-popup', props.className)} />;
}

function List(props: ComponentProps<typeof BaseUISelect.List>) {
  return <BaseUISelect.List {...props} className={clsx('select-list', props.className)} />;
}

function Item(props: ComponentProps<typeof BaseUISelect.Item>) {
  return <BaseUISelect.Item {...props} className={clsx('select-item', props.className)} />;
}

function ItemText(props: ComponentProps<typeof BaseUISelect.ItemText>) {
  return <BaseUISelect.ItemText {...props} className={clsx('select-item-text', props.className)} />;
}

function ItemIndicator(props: ComponentProps<typeof BaseUISelect.ItemIndicator>) {
  return <BaseUISelect.ItemIndicator {...props} className={clsx('select-item-indicator', props.className)} />;
}

function Backdrop(props: ComponentProps<typeof BaseUISelect.Backdrop>) {
  return <BaseUISelect.Backdrop {...props} className={clsx('select-backdrop', props.className)} />;
}

function Arrow(props: ComponentProps<typeof BaseUISelect.Arrow>) {
  return <BaseUISelect.Arrow {...props} className={clsx('select-arrow', props.className)} />;
}

function ScrollUpArrow(props: ComponentProps<typeof BaseUISelect.ScrollUpArrow>) {
  return <BaseUISelect.ScrollUpArrow {...props} className={clsx('select-scroll-arrow', props.className)} />;
}

function ScrollDownArrow(props: ComponentProps<typeof BaseUISelect.ScrollDownArrow>) {
  return <BaseUISelect.ScrollDownArrow {...props} className={clsx('select-scroll-arrow', props.className)} />;
}

function Separator(props: ComponentProps<typeof BaseUISelect.Separator>) {
  return <BaseUISelect.Separator {...props} className={clsx('select-separator', props.className)} />;
}

function Group(props: ComponentProps<typeof BaseUISelect.Group>) {
  return <BaseUISelect.Group {...props} className={clsx('select-group', props.className)} />;
}

function GroupLabel(props: ComponentProps<typeof BaseUISelect.GroupLabel>) {
  return <BaseUISelect.GroupLabel {...props} className={clsx('select-group-label', props.className)} />;
}

export const Select = {
  Root,
  Label,
  Trigger,
  Value,
  Icon,
  Portal,
  Positioner,
  Popup,
  List,
  Item,
  ItemText,
  ItemIndicator,
  Backdrop,
  Arrow,
  ScrollUpArrow,
  ScrollDownArrow,
  Separator,
  Group,
  GroupLabel,
};