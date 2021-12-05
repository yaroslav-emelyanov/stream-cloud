import { createGate } from 'effector-react';

import { watchMovie } from '@entities/movie';

export const Dialog = createGate<string | null>('review-dialog');

watchMovie(Dialog.open);
