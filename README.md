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

## Dark Mode

This design system provides both light and dark mode color palettes, but the theme control is left to the implementing application. To enable dark mode, add the `data-theme="dark"` attribute to a parent element:

```tsx
// Enable dark mode
<html data-theme="dark">
  {/* your app */}
</html>

// Or toggle dynamically
function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      {/* your components */}
    </div>
  );
}
```

The components will automatically use the appropriate colors based on the `data-theme` attribute.

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

### Select

```tsx
import { Select } from '@developmentsnil/awake-ui/select';

// Basic usage
<Select.Root>
  <Select.Label>Choose an option</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Select" />
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
        <Select.List>
          <Select.Item value="1">
            <Select.ItemIndicator>✓</Select.ItemIndicator>
            <Select.ItemText>Option 1</Select.ItemText>
          </Select.Item>
          <Select.Item value="2">
            <Select.ItemIndicator>✓</Select.ItemIndicator>
            <Select.ItemText>Option 2</Select.ItemText>
          </Select.Item>
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>

// With groups and separators
<Select.Root>
  <Select.Label>Choose a category</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Select" />
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
          </Select.Group>
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>

// With scroll arrows for long lists
<Select.Root>
  <Select.Label>Choose a number</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Select" />
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
          {Array.from({ length: 20 }, (_, i) => (
            <Select.Item key={i} value={String(i + 1)}>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
              <Select.ItemText>Option {i + 1}</Select.ItemText>
            </Select.Item>
          ))}
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
```

### Switch

```tsx
import { Switch } from '@developmentsnil/awake-ui/switch';

<Switch
  checked={false}
  onCheckedChange={(checked) => console.log(checked)}
/>
```

### Loading

```tsx
import { Loading } from '@developmentsnil/awake-ui/loading';

<Loading />
```

### Tooltip

```tsx
import { Tooltip } from '@developmentsnil/awake-ui/tooltip';

// Basic usage
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger aria-label="Tooltip trigger">
      <button>Hover me</button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Positioner>
        <Tooltip.Popup>
          <Tooltip.Arrow />
          Tooltip content
        </Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>

// With positioning
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger aria-label="Top tooltip">
      <button>Top</button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Positioner side="top">
        <Tooltip.Popup>
          <Tooltip.Arrow />
          Tooltip on top
        </Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>

// Multiple tooltips
<Tooltip.Provider>
  <div style={{ display: 'flex', gap: '16px' }}>
    <Tooltip.Root>
      <Tooltip.Trigger aria-label="Bold">
        <button>Bold</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            Bold text
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger aria-label="Italic">
        <button>Italic</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            Italic text
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  </div>
</Tooltip.Provider>
```