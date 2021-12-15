import { guard } from 'effector';
import { createGate } from 'effector-react';

import { $currentPage, getFiltersFx, nextPage } from '@entities/film';

export const Page = createGate('main-page');

guard({
  clock: Page.open,
  source: $currentPage,
  filter: (page) => page === 0,
  target: [nextPage, getFiltersFx],
});
