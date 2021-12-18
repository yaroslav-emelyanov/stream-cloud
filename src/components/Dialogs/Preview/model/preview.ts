import { createGate } from 'effector-react';

import { watchDialogMovie } from '@entities/dialog-movie';

export const Dialog = createGate<string | null>('review-dialog');

watchDialogMovie(Dialog.state);
