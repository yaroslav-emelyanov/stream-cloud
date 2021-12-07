import { guard } from 'effector';
import { createGate } from 'effector-react';

import { pagination } from '@entities/movie';

export const Page = createGate('movies-page');

guard({
  clock: Page.open,
  source: pagination.$currentPage,
  filter: (page) => !page,
  target: pagination.nextPage,
});
