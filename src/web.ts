import { WebPlugin } from '@capacitor/core';

import type { AlertPlugin } from './definitions';

export class AlertWeb extends WebPlugin implements AlertPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
