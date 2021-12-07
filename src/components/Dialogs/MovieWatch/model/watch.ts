import { createGate } from 'effector-react';

import { watchMovie } from '@entities/movie';

export const Dialog = createGate<string | null>('movie-watch-dialog');

watchMovie(Dialog.open);
