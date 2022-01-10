import { createEvent, createStore } from 'effector';

import { KinopoiskMovie } from '@shared/types/kinopoisk';

import { HistoryMovie } from './types';

const STORAGE_KEY = 'history';
const LIMIT_STORAGE_FILMS = 30;

export const addMovieToHistory = createEvent<KinopoiskMovie>();

let initState = [];

try {
  const storedHistory = localStorage.getItem(STORAGE_KEY);
  if (storedHistory) {
    const movies = JSON.parse(storedHistory);
    initState = movies;
  }
} catch (err) {}

export const $movieHistory = createStore<HistoryMovie[]>(initState).on(
  addMovieToHistory,
  (prevFilms, film) => {
    const films = prevFilms.filter((f) => f.kinopoiskId !== film.kinopoiskId);

    films.unshift({
      ...film,
      added_to_history: new Date().toISOString(),
    });

    if (films.length > LIMIT_STORAGE_FILMS) {
      films.pop();
    }

    return films;
  }
);

$movieHistory.watch((movies) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
);
