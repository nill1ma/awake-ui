// .storybook/preview.ts
/// <reference types="vite/client" />
import '../src/styles.css';
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;