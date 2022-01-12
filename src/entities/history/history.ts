import { createEffect, createEvent, createStore } from 'effector';

import * as api from '@shared/api';
import { KinopoiskFilm } from '@shared/types';

import { HistoryItem } from './types';

const STORAGE_KEY = 'history';
const LIMIT_STORAGE = 30;

let initState: HistoryItem[] = [];

try {
  const storedFavorites = localStorage.getItem(STORAGE_KEY);
  if (storedFavorites) {
    initState = JSON.parse(storedFavorites);
  }
} catch (err) {}

export const addToHistory = createEvent<string>();

export const $history = createStore<HistoryItem[]>(initState).on(
  addToHistory,
  (history, kinopoiskId) => {
    const filteredHistory = history.filter(
      (item) => item.kinopoiskId !== kinopoiskId
    );

    filteredHistory.unshift({
      kinopoiskId,
      created: new Date().toISOString(),
    });

    if (filteredHistory.length > LIMIT_STORAGE) {
      filteredHistory.pop();
    }

    return filteredHistory;
  }
);

$history.watch((list) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
);

export const $historyIds = $history.map((list) =>
  list.map((item) => item.kinopoiskId)
);

const getHistoryFilmFx = createEffect<string | null, KinopoiskFilm>(
  (kinopoiskId) =>
    api.kinopoisk
      .get<KinopoiskFilm>(`/v2.2/films/${kinopoiskId}`)
      .then((response) => response.data)
);

export const getFilmsByHistoryIdsFx = createEffect<string[], void>(
  async (historyIds) => {
    for (const historyId of historyIds) {
      await getHistoryFilmFx(historyId);
    }
  }
);

export const $historyFilms = createStore<Record<string, KinopoiskFilm>>({}).on(
  getHistoryFilmFx.doneData,
  (prevFilms, film) => ({
    ...prevFilms,
    [film.kinopoiskId.toString()]: film,
  })
);
