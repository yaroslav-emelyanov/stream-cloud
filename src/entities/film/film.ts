import { createEffect, restore } from 'effector';

import * as api from '@shared/api';
import {
  KinopoiskFilm,
  KinopoiskResponse,
  KinopoiskSimilarFilm,
  KinopoiskTrailer,
  VCDNResponse,
  VCDNShortData,
} from '@shared/types';

export const getFilmFx = createEffect<string | undefined, KinopoiskFilm>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskFilm>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

export const getIframeSrcFx = createEffect<string | undefined, string>(
  (kinopoisk_id) =>
    api.videocdn
      .get<VCDNResponse<VCDNShortData>>('/short', {
        params: {
          kinopoisk_id,
        },
      })
      .then((response) => response.data.data[0].iframe_src)
);

export const getFilmTrailerFx = createEffect<
  string | undefined,
  KinopoiskTrailer | null
>((kinopoiskId) =>
  api.kinopoisk
    .get<KinopoiskResponse<KinopoiskTrailer>>(
      `/v2.2/films/${kinopoiskId}/videos`
    )
    .then(
      (response) =>
        response.data.items.find((item) => item.site === 'YOUTUBE') || null
    )
);

export const getSimilarFilmsFx = createEffect<
  string | undefined,
  KinopoiskSimilarFilm[]
>((kinopoiskId) =>
  api.kinopoisk
    .get<KinopoiskResponse<KinopoiskSimilarFilm>>(
      `/v2.2/films/${kinopoiskId}/similars`
    )
    .then((response) => response.data.items)
);

export const $film = restore(getFilmFx.doneData, null);
export const $inframeSrc = restore(getIframeSrcFx.doneData, null);
export const $filmTrailer = restore(getFilmTrailerFx.doneData, null);
export const $similarFilms = restore(getSimilarFilmsFx.doneData, []);
