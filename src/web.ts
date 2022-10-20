import { WebPlugin } from '@capacitor/core';

import type { AlertPlugin } from './definitions';

export class AlertWeb extends WebPlugin implements AlertPlugin {
  present(options: { message: string }): void {
    console.log(options.message);
  }
}
