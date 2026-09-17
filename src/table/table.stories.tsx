import type { Meta, StoryObj } from '@storybook/react-vite';
import { Root, Head, Body, Row, HeaderCell, Cell } from './index';

const meta: Meta = {
  title: 'Components/Table',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Root>
      <Head>
        <Row>
          <HeaderCell>Nome</HeaderCell>
          <HeaderCell>Email</HeaderCell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell>John Doe</Cell>
          <Cell>john.doe@example.com</Cell>
        </Row>
      </Body>
    </Root>
  ),
};