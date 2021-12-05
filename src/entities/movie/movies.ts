import { createEffect, createEvent, createStore, guard } from 'effector';

import * as api from '@shared/api';

import {
  Movie,
  MovieResponse,
  KinopoiskMovie,
  KinopoiskMovieListItem,
} from './types';
import { AxiosError } from 'axios';

import { $currentPage, $hasMorePages, $lastPage } from './pagination';

const currentYear = new Date().getFullYear();

export const getMoviesFx = createEffect<number, MovieResponse>((page) =>
  api.videocdn
    .get<MovieResponse>('/movies', {
      params: {
        page,
        limit: 30,
        year: currentYear,
        field: 'title',
        direction: 'desc',
        ordering: 'last_media_accepted',
      },
    })
    .then((response) => response.data)
);

export const getKinopoiskMovieFx = createEffect<
  string,
  KinopoiskMovie,
  AxiosError
>((kinopoiskId) =>
  api.kinopoisk
    .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
    .then((response) => response.data)
);

$lastPage.on(getMoviesFx.doneData, (_, { last_page }) => last_page);

guard({
  clock: $currentPage,
  filter: $hasMorePages,
  target: getMoviesFx,
});

export const $movies = createStore<Movie[]>([]);

$movies.on(getMoviesFx.doneData, (prevMovies, { data: movies }) => [
  ...prevMovies,
  ...movies,
]);

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
