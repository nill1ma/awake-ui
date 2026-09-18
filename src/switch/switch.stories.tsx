import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './index';

const meta: Meta = {
  title: 'Components/Switch',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Switch
      checked={false}
      onCheckedChange={(checked) => console.log(checked)}
    />
  ),
};
