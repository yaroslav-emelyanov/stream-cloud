import {
  createEffect,
  createStore,
  createEvent,
  restore,
  combine,
} from 'effector';

import * as api from '@shared/api';

import {
  FiltersResponse,
  FilterGenre,
  FilmOrders,
  FilmTypes,
  FilterCountry,
} from './types';

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
export const $selectedGenres = restore<number[]>(selectGenres, []).reset(
  resetFilters
);

export const $countries = createStore<FilterCountry[]>([]).on(
  getFiltersFx.doneData,
  (_, { countries }) => countries
);

export const selectCountries = createEvent<number[]>();
export const $selectedCountries = restore<number[]>(selectCountries, []).reset(
  resetFilters
);

export const setOrder = createEvent<FilmOrders>();
export const $order = restore(setOrder, FilmOrders.YEAR).reset(resetFilters);

export const setType = createEvent<FilmTypes>();
export const $type = restore(setType, FilmTypes.ALL).reset(resetFilters);

export const setRating = createEvent<[number, number]>();
export const $rating = restore<[number, number]>(setRating, [0, 10]).reset(
  resetFilters
);

export const setYearFrom = createEvent<Date | null>();
export const $yearFrom = restore(setYearFrom, null).reset(resetFilters);

export const $filters = combine({
  genres: $selectedGenres,
  countries: $selectedCountries,
  rating: $rating,
  yearFrom: $yearFrom,
  order: $order,
  type: $type,
});
