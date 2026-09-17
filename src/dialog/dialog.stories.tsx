import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './index';

const meta: Meta = {
  title: 'Components/Dialog',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
