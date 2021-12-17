import {
  createEffect,
  createStore,
  attach,
  sample,
  combine,
  createEvent,
  restore,
  guard,
} from 'effector';
import { debounce } from 'patronum/debounce';

import * as api from '@shared/api';

import { $filters } from './filters';
import { nextPage } from './pagination';
import { $currentPage, $lastPage } from './pagination';
import { GetFilmsParams, FilmResponse, Film } from './types';

export const getFilmsFx = createEffect<GetFilmsParams, FilmResponse>(
  ({ page, order, rating, year, type, genres, countries }) =>
    api.kinopoisk
      .get<FilmResponse>('/v2.1/films/search-by-filters', {
        params: {
          page,
          order,
          type,
          ratingFrom: rating[0],
          ratingTo: rating[1],
          yearFrom: year[0],
          yearTo: year[1],
          genre: genres.length ? genres.join(',') : undefined,
          country: countries.length ? countries.join(',') : undefined,
        },
      })
      .then((response) => response.data)
);

export const getFilmsBySearchFx = createEffect<string, FilmResponse>(
  (keyword) =>
    api.kinopoisk
      .get<FilmResponse>('/v2.1/films/search-by-keyword', {
        params: {
          keyword,
        },
      })
      .then((response) => response.data)
);

$currentPage.on(getFilmsFx.done, (_, { params }) => params.page);
$lastPage.on(getFilmsFx.doneData, (_, { pagesCount }) => pagesCount);

sample({
  clock: nextPage,
  source: [$currentPage, $filters],
  fn: ([page, filters]) => ({ page, ...filters }),
  target: getFilmsFx,
});

export const getFilmsByFiltersFx = attach({
  effect: getFilmsFx,
  mapParams: (params: Omit<GetFilmsParams, 'page'>) => ({ page: 1, ...params }),
});

debounce({
  source: $filters,
  timeout: 300,
  target: getFilmsByFiltersFx,
});

export const setSearch = createEvent<string>();
export const $search = restore(setSearch, '');

const $defaultFilms = createStore<Film[]>([])
  .on(getFilmsFx.doneData, (prevFilms, { films }) => [...prevFilms, ...films])
  .on(getFilmsByFiltersFx.doneData, (_, { films }) => films);

const $searchFilms = createStore<Film[]>([]).on(
  getFilmsBySearchFx.doneData,
  (_, { films }) => films
);

const fetchBySearch = guard({
  source: $search,
  filter: Boolean,
});

debounce({
  source: fetchBySearch,
  timeout: 500,
  target: getFilmsBySearchFx,
});

export const $films = combine(
  {
    defaultFilms: $defaultFilms,
    searchFilms: $searchFilms,
    search: $search,
  },
  ({ defaultFilms, searchFilms, search }) =>
    search ? searchFilms : defaultFilms
);
