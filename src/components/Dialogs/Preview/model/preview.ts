import { createGate } from 'effector-react';

import { watchDialogMovie } from '@entities/dialog-movie';

export const Dialog = createGate<string | null>('movie-review-dialog');

watchDialogMovie(Dialog.open);
