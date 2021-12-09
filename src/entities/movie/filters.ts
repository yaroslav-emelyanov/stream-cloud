import { combine, attach } from 'effector';
import { debounce } from 'patronum/debounce';

import { createFilters } from '@shared/utils';

import { $movies, getMoviesFx, GetMoviesParams } from './movies';

export const filters = createFilters();

export const $filters = combine({ query: filters.$query, year: filters.$year });

export const getMoviesByFilters = attach({
  effect: getMoviesFx,
  mapParams: (params: Required<Omit<GetMoviesParams, 'page'>>) => ({
    page: 1,
    ...params,
  }),
});

debounce({
  source: $filters,
  timeout: 300,
  target: getMoviesByFilters,
});

$movies.on(getMoviesByFilters.doneData, (_, { data }) => data);
