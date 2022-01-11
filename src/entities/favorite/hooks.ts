import { useStore, useStoreMap } from 'effector-react';

import { $favorites, $favoriteIds, $favoriteMovies } from './favorite';

export const useFavorites = () => useStore($favorites);

export const useIsFavorite = (kinopoiskId: string) =>
  useStoreMap({
    store: $favoriteIds,
    keys: [kinopoiskId],
    fn: (favorites, [id]) => favorites.includes(id),
  });

export const useFavoriteMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $favoriteMovies,
    keys: [kinopoiskId],
    fn: (movies, [id]) => movies[id],
  });
