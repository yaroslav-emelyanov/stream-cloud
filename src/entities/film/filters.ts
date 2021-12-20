import {
  createEffect,
  createStore,
  createEvent,
  restore,
  combine,
} from 'effector';

import * as api from '@shared/api';
import { createLocalStorageStore } from '@shared/utils';

import {
  FiltersResponse,
  FilterGenre,
  FilmOrders,
  FilmTypes,
  FilterCountry,
} from './types';

import { MIN_YEAR, MAX_YEAR } from './constants';

export const resetFilters = createEvent();

export const getFiltersFx = createEffect<void, FiltersResponse>(() =>
  api.kinopoisk
    .get<FiltersResponse>('/v2.1/films/filters')
    .then((response) => response.data)
);

export const $genres = createStore<FilterGenre[]>([]).on(
  getFiltersFx.doneData,
  (_, { genres }) => genres
);

export const selectGenres = createEvent<number[]>();
export const $selectedGenres = createLocalStorageStore(
  selectGenres,
  [],
  'genres'
).reset(resetFilters);

export const $countries = createStore<FilterCountry[]>([]).on(
  getFiltersFx.doneData,
  (_, { countries }) => countries
);

export const selectCountries = createEvent<number[]>();
export const $selectedCountries = createLocalStorageStore(
  selectCountries,
  [],
  'countries'
).reset(resetFilters);

export const setOrder = createEvent<FilmOrders>();
export const $order = createLocalStorageStore(
  setOrder,
  FilmOrders.YEAR,
  'order'
).reset(resetFilters);

export const setType = createEvent<FilmTypes>();
export const $type = createLocalStorageStore(
  setType,
  FilmTypes.ALL,
  'type'
).reset(resetFilters);

export const setRating = createEvent<[number, number]>();
export const $rating = createLocalStorageStore<[number, number]>(
  setRating,
  [0, 10],
  'rating'
).reset(resetFilters);

export const setYear = createEvent<[number, number]>();
export const $year = createLocalStorageStore<[number, number]>(
  setYear,
  [MIN_YEAR, MAX_YEAR],
  'year'
).reset(resetFilters);

export const $filters = combine({
  genres: $selectedGenres,
  countries: $selectedCountries,
  rating: $rating,
  order: $order,
  type: $type,
  year: $year,
});

export const setSearch = createEvent<string>();
export const $search = restore(setSearch, '');
