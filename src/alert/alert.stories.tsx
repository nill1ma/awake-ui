import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: 'info', children: 'Informação' } };
export const Success: Story = { args: { variant: 'success', children: 'Sucesso' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Aviso' } };
export const Error: Story = { args: { variant: 'error', children: 'Erro' } };