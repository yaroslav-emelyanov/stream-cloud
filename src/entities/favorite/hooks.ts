import { useStore, useStoreMap } from 'effector-react';

import { $favoriteMovies } from './favorite';

export const useFavoriteMovies = () => useStore($favoriteMovies);

const $favoriteIds = $favoriteMovies.map((movies) =>
  movies.map((m) => m.kinopoiskId)
);

export const useIsFavorite = (kinopoiskId: string) =>
  useStoreMap({
    store: $favoriteIds,
    keys: [kinopoiskId],
    fn: (favorites, [id]) => favorites.includes(id),
  });
