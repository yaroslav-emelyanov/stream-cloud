import { createGate, useGate } from 'effector-react';
import { combine, sample } from 'effector';

import {
  $historyIds,
  $historyFilms,
  getFilmsByHistoryIdsFx,
} from '@entities/history';

const Page = createGate('history-page');

const $filteredHistoryIds = combine(
  [$historyIds, $historyFilms],
  ([ids, movies]) => ids.filter((id) => !movies[id])
);

sample({
  clock: Page.open,
  source: $filteredHistoryIds,
  target: getFilmsByHistoryIdsFx,
});

export const usePageGate = () => useGate(Page);
