import { Button } from 'awake-ui/button';
import { Dialog } from 'awake-ui/dialog';
import { Field } from 'awake-ui/field';
import { Pagination } from 'awake-ui/pagination';
import { Select } from 'awake-ui/select';
import { Separator } from 'awake-ui/separator';
import { Switch } from 'awake-ui/switch';
import { Loading } from 'awake-ui/loading';
import * as Table from 'awake-ui/table';
import 'awake-ui/style.css';
import { useState } from 'react';
import './App.css';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [isDark, setIsDark] = useState(true);
  return (
    <div data-theme={isDark ? 'dark' : 'light'} style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', backgroundColor: isDark ? '#0f172a' : '#f8fafc', minHeight: '100vh'}}>
      <div style={{display: 'flex', gap: '16px', marginBottom: '20px'}}>
        <Button onClick={() => setIsDark(!isDark)} variant="secondary">
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </div>
    <Table.Root style={{width:'50%', border: '1px solid black'}}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell 1</Table.Cell>
          <Table.Cell>Cell 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
    <Pagination currentPage={currentPage} totalPages={10} onPageChange={(page: number) => setCurrentPage(page)} />
    <Dialog.Root>
      <Dialog.Trigger>Abrir</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Exemplo</Dialog.Title>
          <Dialog.Close>Fechar</Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
      <Field.Root>
        <Field.Label>Label</Field.Label>
        <Field.Control type="text" />
      </Field.Root>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button className='ml-4 w-10 text-cyan-800' variant="primary">Primário</Button>
        <Separator className='awake-separator-custom' orientation='vertical' />
        <Button className='ml-4 w-10' variant="secondary">Secundário</Button>
      </div>
      <Select.Root>
  <Select.Label>Choose an option</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Selecione" />
    <Select.Icon>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
      </svg>
    </Select.Icon>
  </Select.Trigger>
  <Select.Portal>
    <Select.Backdrop />
    <Select.Positioner>
      <Select.Popup>
        <Select.ScrollUpArrow>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 10H4l4-4.5z" />
          </svg>
        </Select.ScrollUpArrow>
        <Select.List>
          <Select.Group>
            <Select.GroupLabel>Fruits</Select.GroupLabel>
            <Select.Item value="apple">
              <Select.ItemIndicator>✓</Select.ItemIndicator>
              <Select.ItemText>Apple</Select.ItemText>
            </Select.Item>
            <Select.Item value="banana">
              <Select.ItemIndicator>✓</Select.ItemIndicator>
              <Select.ItemText>Banana</Select.ItemText>
            </Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.GroupLabel>Vegetables</Select.GroupLabel>
            <Select.Item value="carrot">
              <Select.ItemIndicator>✓</Select.ItemIndicator>
              <Select.ItemText>Carrot</Select.ItemText>
            </Select.Item>
            <Select.Item value="broccoli">
              <Select.ItemIndicator>✓</Select.ItemIndicator>
              <Select.ItemText>Broccoli</Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.List>
        <Select.ScrollDownArrow>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 6H4l4 4.5z" />
          </svg>
        </Select.ScrollDownArrow>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>

<Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />

<Loading />

    </div>
  )
}

export default App
