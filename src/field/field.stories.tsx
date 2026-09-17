import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './index';

const meta: Meta = {
  title: 'Components/Field',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Nome</Field.Label>
      <Field.Control placeholder="Digite seu nome" />
    </Field.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field.Root disabled>
      <Field.Label>Nome</Field.Label>
      <Field.Control placeholder="Digite seu nome" />
    </Field.Root>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Field.Control type="email" placeholder="seuemail@exemplo.com" />
    </Field.Root>
  ),
};