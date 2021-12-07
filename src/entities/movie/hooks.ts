import { useStore, useStoreMap } from 'effector-react';

import { $movies, pagination } from './movies';
import { $kinopoiskMovies } from './kinopoisk';
import { $currentMovie, $currentMovieIsLoading } from './movie';

export const useMovies = () => useStore($movies);

export const useHasMorePages = () => useStore(pagination.$hasMorePages);

export const useKinopoiskMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskMovies,
    keys: [kinopoiskId],
    fn: (movies, [kinopoiskId]) =>
      movies.find((movie) => movie.kinopoiskId === kinopoiskId),
  });

export const useCurrentMovie = () => useStore($currentMovie);

export const useCurrentMovieIsLoading = () => useStore($currentMovieIsLoading);
