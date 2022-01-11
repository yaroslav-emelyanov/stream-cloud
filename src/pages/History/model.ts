import { createGate, useGate } from 'effector-react';
import { combine, sample } from 'effector';

import {
  getMoviesByHistoryIdsFx,
  $historyIds,
  $historyMovies,
} from '@entities/history';

const Page = createGate('history-page');

const $filteredHistoryIds = combine(
  [$historyIds, $historyMovies],
  ([ids, movies]) => ids.filter((id) => !movies[id])
);

sample({
  clock: Page.open,
  source: $filteredHistoryIds,
  target: getMoviesByHistoryIdsFx,
});

export const usePageGate = () => useGate(Page);
