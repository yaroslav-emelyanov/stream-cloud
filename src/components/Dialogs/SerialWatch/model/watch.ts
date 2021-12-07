import { createGate } from 'effector-react';

import { watchSerial } from '@entities/serial';

export const Dialog = createGate<string | null>('serial-watch-dialog');

watchSerial(Dialog.open);
