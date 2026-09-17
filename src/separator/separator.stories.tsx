import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './index';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = { args: { orientation: 'horizontal' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };