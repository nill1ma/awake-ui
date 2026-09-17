# Awake UI

## Installation

```bash
npm install @developmentsnil/awake-ui
```

## Usage

Import the CSS once in your application root:

```tsx
import '@developmentsnil/awake-ui/style.css';
```

### Button

```tsx
import { Button } from '@developmentsnil/awake-ui/button';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```

### Dialog

```tsx
import { Dialog } from '@developmentsnil/awake-ui/dialog';

<Dialog.Root>
  <Dialog.Trigger>Open Dialog</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>Dialog description text</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

### Field

```tsx
import { Field } from '@developmentsnil/awake-ui/field';

<Field.Root>
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" />
</Field.Root>
```

### Pagination

```tsx
import { Pagination } from '@developmentsnil/awake-ui/pagination';
import { useState } from 'react';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination 
      currentPage={currentPage} 
      totalPages={10} 
      onPageChange={(page) => setCurrentPage(page)} 
    />
  );
}
```

### Separator

```tsx
import { Separator } from '@developmentsnil/awake-ui/separator';

<Separator /> {/* Horizontal */}
<Separator orientation="vertical" /> {/* Vertical */}
```

### Table

```tsx
import * as Table from '@developmentsnil/awake-ui/table';

<Table.Root>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```
