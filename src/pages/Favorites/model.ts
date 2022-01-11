import { createGate, useGate } from 'effector-react';
import { combine, sample } from 'effector';

import {
  getMoviesByFavoriteIdsFx,
  $favoriteIds,
  $favoriteMovies,
} from '@entities/favorite';

const Page = createGate('favorite-page');

const $filteredFavorites = combine(
  [$favoriteIds, $favoriteMovies],
  ([ids, movies]) => ids.filter((id) => !movies[id])
);

sample({
  clock: Page.open,
  source: $filteredFavorites,
  target: getMoviesByFavoriteIdsFx,
});

export const usePageGate = () => useGate(Page);
