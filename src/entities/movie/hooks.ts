import { useStore, useStoreMap } from 'effector-react';

import { $movies, $kinopoiskMovies, getMoviesFx } from './movies';
import { pagination } from './pagination';
import { $filters } from './filters';

export const useMovies = () => useStore($movies);

export const useIsLoadingMovies = () => useStore(getMoviesFx.pending);

export const useFilters = () => useStore($filters);

export const useHasMorePages = () => useStore(pagination.$hasMorePages);

export const useKinopoiskMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskMovies,
    keys: [kinopoiskId],
    fn: (movies, [kinopoiskId]) =>
      movies.find((movie) => movie.kinopoiskId === kinopoiskId),
  });
