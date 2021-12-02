import { useStore, useStoreMap } from 'effector-react';

import { $movies, $kinopoiskMovies } from './movie';
import { $hasMorePages } from './pagination';

export const useMovies = () => useStore($movies);

export const useHasMorePages = () => useStore($hasMorePages);

export const useKinopoiskMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskMovies,
    keys: [kinopoiskId],
    fn: (movies, [kinopoiskId]) =>
      movies.find((movie) => movie.kinopoiskId === kinopoiskId),
  });
