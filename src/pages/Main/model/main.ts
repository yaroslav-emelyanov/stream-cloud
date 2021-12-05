import { guard } from 'effector';
import { createGate } from 'effector-react';

import { nextPage, $currentPage } from '@entities/movie';

export const Page = createGate('main-page');

guard({
  clock: Page.open,
  source: $currentPage,
  filter: (page) => !page,
  target: nextPage,
});
