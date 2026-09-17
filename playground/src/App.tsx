import { Button } from 'woken-ui/button';
import { Dialog } from 'woken-ui/dialog';
import { Field } from 'woken-ui/field';
import * as Table from 'woken-ui/table';
import { Separator } from 'woken-ui/separator';
import 'woken-ui/style.css'; 
import './App.css';

function App() {
  return (
    <>
    <Table.Root>
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
        <Separator className='woken-separator-custom' orientation='vertical' />
        <Button className='ml-4 w-10' variant="secondary">Secundário</Button>
      </div>
    </>
  )
}

export default App
