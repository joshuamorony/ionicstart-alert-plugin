import { registerPlugin } from '@capacitor/core';

import type { AlertPlugin } from './definitions';

const Alert = registerPlugin<AlertPlugin>('Alert', {
  web: () => import('./web').then(m => new m.AlertWeb()),
});

export * from './definitions';
export { Alert };
