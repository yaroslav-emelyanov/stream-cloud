import { createStore, createEvent, combine, Effect, guard } from 'effector';

import { VCDNResponse } from '@shared/types';

export const createVCDNPagination = (
  effect: Effect<any, VCDNResponse<any>>
) => {
  const nextPage = createEvent();

  const $currentPage = createStore(0).on(nextPage, (prevPage) => prevPage + 1);
  const $lastPage = createStore(-1);

  const $hasMorePages = combine(
    $currentPage,
    $lastPage,
    (currentPage, lastPage) => currentPage !== lastPage + 1
  );

  $lastPage.on(effect.doneData, (_, { last_page }) => last_page);

  guard({
    clock: $currentPage,
    filter: $hasMorePages,
    target: effect,
  });

  return {
    nextPage,
    $lastPage,
    $currentPage,
    $hasMorePages,
  };
};
