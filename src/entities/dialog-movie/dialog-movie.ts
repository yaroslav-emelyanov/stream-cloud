import { combine, createEffect, guard, restore, sample, Unit } from 'effector';

import * as api from '@shared/api';
import {
  VCDNResponse,
  VCDNShortData,
  KinopoiskMovie,
  KinopoiskTrailer,
  KinopoiskResponse,
  KinopoiskSimilarMovie,
} from '@shared/types';

const getMovieFx = createEffect<string | null, VCDNShortData | null>(
  (kinopoisk_id) =>
    api.videocdn
      .get<VCDNResponse<VCDNShortData>>('/short', {
        params: {
          kinopoisk_id,
        },
      })
      .then((response) => response.data.data[0] || null)
);

const getTrailerFx = createEffect<string | null, KinopoiskTrailer | null>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskResponse<KinopoiskTrailer>>(
        `/v2.2/films/${kinopoiskId}/videos`
      )
      .then(
        (response) =>
          response.data.items.find((item) => item.site === 'YOUTUBE') || null
      )
);

const getMovieInfoFx = createEffect<string | null, KinopoiskMovie>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

const getSimilarMoviesFx = createEffect<string | null, KinopoiskSimilarMovie[]>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskResponse<KinopoiskSimilarMovie>>(
        `/v2.2/films/${kinopoiskId}/similars`
      )
      .then((response) => response.data.items)
);

const $movie = restore(getMovieFx.doneData, null).reset(getMovieFx.fail);
const $trailer = restore(getTrailerFx.doneData, null).reset(getTrailerFx.fail);
const $info = restore(getMovieInfoFx.doneData, null).reset(getMovieInfoFx.fail);
const $similarMovies = restore(getSimilarMoviesFx.doneData, []).reset(
  getSimilarMoviesFx.fail
);

export const $dialogMovieIsLoading = combine(
  [getMovieFx.pending, getMovieInfoFx.pending, getTrailerFx.pending],
  (values) => values.every((value) => value)
);

export const $dialogMovie = combine({
  info: $info,
  movie: $movie,
  trailer: $trailer,
  similarMovies: $similarMovies,
});

export const watchDialogMovie = (clock: Unit<string | null>) => {
  const trigger = guard({
    clock,
    source: $movie,
    filter: (movie, kinopoiskId) =>
      typeof kinopoiskId !== 'object' ? movie?.kp_id !== kinopoiskId : false, // After close return "object" insted null
  });

  sample({
    clock: trigger,
    source: clock,
    target: [getMovieFx, getMovieInfoFx, getTrailerFx, getSimilarMoviesFx],
  });
};
