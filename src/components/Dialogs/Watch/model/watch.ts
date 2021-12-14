import { createGate } from 'effector-react';

import { watchDialogMovie } from '@entities/dialog-movie';

export const Dialog = createGate<string | null>('movie-watch-dialog');

watchDialogMovie(Dialog.open);