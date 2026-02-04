import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};


export default preview;
