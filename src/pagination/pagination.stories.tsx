import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './index';

const meta: Meta = {
  title: 'Components/Pagination',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Pagination
      currentPage={1}
      totalPages={10}
      onPageChange={(page) => console.log(page)}
    />
  ),
};
