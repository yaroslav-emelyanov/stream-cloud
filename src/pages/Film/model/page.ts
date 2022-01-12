import { sample } from 'effector';
import { createGate } from 'effector-react';

import {
  getFilmFx,
  getFilmTrailerFx,
  getIframeSrcFx,
  getSimilarFilmsFx,
} from '@entities/film';

export const Page = createGate<{ kinopoiskId?: string }>('film-page');

sample({
  clock: Page.open,
  fn: (params) => params.kinopoiskId,
  target: [getFilmFx, getFilmTrailerFx, getSimilarFilmsFx, getIframeSrcFx],
});
