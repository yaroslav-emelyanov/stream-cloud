import { KinopoiskMovie } from '@shared/types';
import { createEffect, createEvent, createStore } from 'effector';

import * as api from '@shared/api';
import { Favorite } from './types';

const STORAGE_KEY = 'favorites';
const LIMIT_STORAGE = 30;

let initState: Favorite[] = [];

try {
  const storedFavorites = localStorage.getItem(STORAGE_KEY);
  if (storedFavorites) {
    initState = JSON.parse(storedFavorites);
  }
} catch (err) {}

export const likeFilm = createEvent<string>();

export const $favorites = createStore<Favorite[]>(initState).on(
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

$favorites.watch((list) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
);

export const $favoriteIds = $favorites.map((movies) =>
  movies.map((m) => m.kinopoiskId)
);

const getFavoriteMovieFx = createEffect<string | null, KinopoiskMovie>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

export const getMoviesByFavoriteIdsFx = createEffect<string[], void>(
  async (favoriteIds) => {
    for (const favoriteId of favoriteIds) {
      await getFavoriteMovieFx(favoriteId);
    }
  }
);

export const $favoriteMovies = createStore<Record<string, KinopoiskMovie>>(
  {}
).on(getFavoriteMovieFx.doneData, (prevMovies, newMovie) => ({
  ...prevMovies,
  [newMovie.kinopoiskId.toString()]: newMovie,
}));
