import { combine, attach } from 'effector';
import { debounce } from 'patronum/debounce';

import { createFilters } from '@shared/utils';

import { $serials, getSerialsFx, GetSerialsParams } from './serials';

export const filters = createFilters();

export const $filters = combine({ query: filters.$query, year: filters.$year });

export const getSerialsByFilters = attach({
  effect: getSerialsFx,
  mapParams: (params: Required<Omit<GetSerialsParams, 'page'>>) => ({
    page: 1,
    ...params,
  }),
});

debounce({
  source: $filters,
  timeout: 300,
  target: getSerialsByFilters,
});

$serials.on(getSerialsByFilters.doneData, (_, { data }) => data);
