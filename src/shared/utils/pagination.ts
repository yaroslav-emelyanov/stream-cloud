import { createStore, combine, createEvent, Unit } from 'effector';

import { VCDNResponse } from '@shared/types';

export const createVCDNPagination = (unit: Unit<VCDNResponse<any>>) => {
  const nextPage = createEvent();
  const reset = createEvent();

  const $currentPage = createStore(0)
    .on(unit, (_, { current_page }) => current_page)
    .reset(reset);

  const $lastPage = createStore(0).on(unit, (_, { last_page }) => last_page);

  const $hasMorePages = combine(
    $currentPage,
    $lastPage,
    (currentPage, lastPage) => currentPage !== lastPage
  );

  return {
    reset,
    nextPage,
    $lastPage,
    $currentPage,
    $hasMorePages,
  };
};
