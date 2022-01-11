import { createEvent, createStore } from 'effector';

import { FavoriteMovie } from './types';

const STORAGE_KEY = 'favorites';
const LIMIT_STORAGE = 30;

let initState = [];

try {
  const storedFavorites = localStorage.getItem(STORAGE_KEY);
  if (storedFavorites) {
    const favorites = JSON.parse(storedFavorites);
    initState = favorites;
  }
} catch (err) {}

export const likeFilm = createEvent<string>();

export const $favoriteMovies = createStore<FavoriteMovie[]>(initState).on(
  likeFilm,
  (favorites, kinopoiskId) => {
    const filteredFavorites = favorites.filter(
      (f) => f.kinopoiskId !== kinopoiskId
    );

    if (favorites.length === filteredFavorites.length) {
      filteredFavorites.unshift({
        kinopoiskId,
        created: new Date().toISOString(),
      });

      if (filteredFavorites.length > LIMIT_STORAGE) {
        filteredFavorites.pop();
      }
    }

    return filteredFavorites;
  }
);

$favoriteMovies.watch((list) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
);
