import { createEffect, createEvent, createStore } from 'effector';

import * as api from '@shared/api';

import { getSerialsFx } from './serial';
import { KinopoiskMovie, KinopoiskMovieListItem } from './types';

export const getKinopoiskMovieFx = createEffect<string, KinopoiskMovie>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

const hideLoadingBySerialId = createEvent<number>();

getSerialsFx.doneData.watch(async ({ data: movies }) => {
  for (const movie of movies) {
    if (movie.kinopoisk_id) {
      await getKinopoiskMovieFx(movie.kinopoisk_id).catch(() => {});
    } else {
      hideLoadingBySerialId(movie.id);
    }
  }
});

export const $kinopoiskSerials = createStore<KinopoiskMovieListItem[]>([]).on(
  getSerialsFx.doneData,
  (prevItems, { data }) => [
    ...prevItems,
    ...data.map<KinopoiskMovieListItem>((movie) => ({
      movieId: movie.id,
      kinopoiskId: movie.kinopoisk_id,
      movieInfo: null,
      loading: true,
    })),
  ]
);

$kinopoiskSerials
  .on(getKinopoiskMovieFx.doneData, (serials, kinopoiskSerial) =>
    serials.map<KinopoiskMovieListItem>((serial) =>
      serial.kinopoiskId === kinopoiskSerial.kinopoiskId.toString()
        ? { ...serial, movieInfo: kinopoiskSerial, loading: false }
        : serial
    )
  )
  .on(hideLoadingBySerialId, (serials, movieId) =>
    serials.map<KinopoiskMovieListItem>((serial) =>
      serial.movieId === movieId ? { ...serial, loading: false } : serial
    )
  );
