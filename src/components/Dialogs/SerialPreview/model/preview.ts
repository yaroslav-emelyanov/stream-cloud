import { createGate } from 'effector-react';

import { watchSerial } from '@entities/serial';

export const Dialog = createGate<string | null>('serial-review-dialog');

watchSerial(Dialog.open);
