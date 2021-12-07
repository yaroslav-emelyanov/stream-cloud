import { combine, createEffect, restore, sample } from 'effector';

import * as api from '@shared/api';
import {
  VCDNResponse,
  KinopoiskMovie,
  KinopoiskVideo,
  KinopoiskVideoResponse,
} from '@shared/types';

import { Movie } from './types';

const currentYear = new Date().getFullYear();

export const getMovieFx = createEffect<string | null, Movie | null>(
  (kinopoiskId) =>
    api.videocdn
      .get<VCDNResponse<Movie>>('/movies', {
        params: {
          page: 1,
          limit: 30,
          year: currentYear,
          query: kinopoiskId,
          field: 'kinopoisk_id',
          direction: 'desc',
          ordering: 'last_media_accepted',
        },
      })
      .then((response) => response.data.data[0])
);

const getKinopoisVideoFx = createEffect<string, KinopoiskVideo | null>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskVideoResponse>(`/v2.2/films/${kinopoiskId}/videos`)
      .then(
        (response) =>
          response.data.items.find((item) => item.site === 'YOUTUBE') || null
      )
);

const getKinopoiskMovieFx = createEffect<string, KinopoiskMovie>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

sample({
  clock: getMovieFx.doneData,
  fn: (movie) => movie?.kinopoisk_id || '',
  target: [getKinopoiskMovieFx, getKinopoisVideoFx],
});

export const $movie = restore(getMovieFx.doneData, null);
export const $video = restore(getKinopoisVideoFx.doneData, null);
export const $kinopoiskMovie = restore(getKinopoiskMovieFx.doneData, null);

export const $currentMovieIsLoading = combine(
  [getMovieFx.pending, getKinopoiskMovieFx.pending, getKinopoisVideoFx.pending],
  (values) => values.some((value) => value)
);

export const $currentMovie = combine([$movie, $kinopoiskMovie, $video]);
