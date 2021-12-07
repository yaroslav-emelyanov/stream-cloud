import { createEffect, createEvent, createStore } from 'effector';

import * as api from '@shared/api';

import { getMoviesFx } from './movies';
import { KinopoiskMovie, KinopoiskMovieListItem } from './types';

export const getKinopoiskMovieFx = createEffect<string, KinopoiskMovie>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

const hideLoadingByMovieId = createEvent<number>();

getMoviesFx.doneData.watch(async ({ data: movies }) => {
  for (const movie of movies) {
    if (movie.kinopoisk_id) {
      await getKinopoiskMovieFx(movie.kinopoisk_id).catch(() => {});
    } else {
      hideLoadingByMovieId(movie.id);
    }
  }
});

export const $kinopoiskMovies = createStore<KinopoiskMovieListItem[]>([]).on(
  getMoviesFx.doneData,
  (prevItems, { data: movies }) => [
    ...prevItems,
    ...movies.map<KinopoiskMovieListItem>((movie) => ({
      movieId: movie.id,
      kinopoiskId: movie.kinopoisk_id,
      movieInfo: null,
      loading: true,
    })),
  ]
);

$kinopoiskMovies
  .on(getKinopoiskMovieFx.doneData, (movies, kinopoiskMovie) =>
    movies.map<KinopoiskMovieListItem>((movie) =>
      movie.kinopoiskId === kinopoiskMovie.kinopoiskId.toString()
        ? { ...movie, movieInfo: kinopoiskMovie, loading: false }
        : movie
    )
  )
  .on(hideLoadingByMovieId, (movies, movieId) =>
    movies.map<KinopoiskMovieListItem>((movie) =>
      movie.movieId === movieId ? { ...movie, loading: false } : movie
    )
  );
