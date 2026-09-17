import { Button } from 'awake-ui/button';
import { Dialog } from 'awake-ui/dialog';
import { Field } from 'awake-ui/field';
import { Pagination } from 'awake-ui/pagination';
import * as Table from 'awake-ui/table';
import { Separator } from 'awake-ui/separator';
import 'awake-ui/style.css'; 
import './App.css';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
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
    <Pagination currentPage={currentPage} totalPages={10} onPageChange={(page) => setCurrentPage(page)} />
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
    </>
  )
}

export default App
