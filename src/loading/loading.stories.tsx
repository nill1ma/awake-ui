import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from './index';

const meta: Meta = {
  title: 'Components/Loading',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Loading />
  ),
};
