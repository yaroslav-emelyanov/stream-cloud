import { createEffect, createStore, attach, sample } from 'effector';
import { debounce } from 'patronum/debounce';

import dayjs from 'dayjs';
import * as api from '@shared/api';

import { $filters } from './filters';
import { $currentPage, $lastPage } from './pagination';
import { GetFilmsParams, FilmResponse, Film } from './types';

export const getFilmsFx = createEffect<GetFilmsParams, FilmResponse>(
  ({ page, order, rating, yearFrom, type, genres, countries }) =>
    api.kinopoisk
      .get<FilmResponse>('/v2.1/films/search-by-filters', {
        params: {
          page,
          order,
          type,
          ratingFrom: rating[0],
          ratingTo: rating[1],
          yearFrom: yearFrom ? dayjs(yearFrom).year() : undefined,
          yearTo: yearFrom ? dayjs(yearFrom).year() : undefined,
          genre: genres.length ? genres.join(',') : undefined,
          country: countries.length ? countries.join(',') : undefined,
        },
      })
      .then((response) => response.data)
);

$lastPage.on(getFilmsFx.doneData, (_, { pagesCount }) => pagesCount);

sample({
  clock: $currentPage,
  source: $filters,
  fn: (params, page) => ({ page, ...params }),
  target: getFilmsFx,
});

const getFilmsByFiltersFx = attach({
  effect: getFilmsFx,
  mapParams: (params: Omit<GetFilmsParams, 'page'>) => ({ page: 1, ...params }),
});

debounce({
  source: $filters,
  timeout: 300,
  target: getFilmsByFiltersFx,
});

export const $films = createStore<Film[]>([])
  .on(getFilmsFx.doneData, (prevFilms, { films }) => [...prevFilms, ...films])
  .on(getFilmsByFiltersFx.doneData, (_, { films }) => films);
