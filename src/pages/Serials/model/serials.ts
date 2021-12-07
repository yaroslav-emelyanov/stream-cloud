import { guard } from 'effector';
import { createGate } from 'effector-react';

import { pagination } from '@entities/serial';

export const Page = createGate('serials-page');

guard({
  clock: Page.open,
  source: pagination.$currentPage,
  filter: (page) => !page,
  target: pagination.nextPage,
});
