import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Botão primário' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Botão secundário' } };