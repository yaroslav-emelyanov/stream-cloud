import { createGate } from 'effector-react';

import { getMoviesFx } from '@entities/movie';

export const Page = createGate('main-page');

Page.open.watch(() => {
  getMoviesFx(1);
});
