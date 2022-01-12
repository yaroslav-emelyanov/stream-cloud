import { guard } from 'effector';
import { createGate } from 'effector-react';

import {
  getFilmFx,
  getFilmTrailerFx,
  getIframeSrcFx,
  getSimilarFilmsFx,
} from '@entities/film';

export const Page = createGate<{ kinopoiskId?: string }>('film-page');

const $kinopoiskId = Page.state.map((params) => params?.kinopoiskId);

guard({
  clock: $kinopoiskId,
  filter: Boolean,
  target: [getFilmFx, getFilmTrailerFx, getSimilarFilmsFx, getIframeSrcFx],
});
