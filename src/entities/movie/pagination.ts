import { createStore, createEvent, combine } from 'effector';

export const nextPage = createEvent();

export const $currentPage = createStore(0).on(
  nextPage,
  (prevPage) => prevPage + 1
);
export const $lastPage = createStore(-1);

export const $hasMorePages = combine(
  $currentPage,
  $lastPage,
  (currentPage, lastPage) => currentPage !== lastPage + 1
);
