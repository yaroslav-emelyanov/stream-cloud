import { sample } from 'effector';

import * as utils from '@shared/utils';

import { getSerialsFx } from './serials';
import { $filters } from './filters';

export const pagination = utils.createVCDNPagination(getSerialsFx.doneData);

sample({
  clock: pagination.nextPage,
  source: [pagination.$currentPage, $filters],
  fn: ([page, filters]) => ({ page: page + 1, ...filters }),
  target: getSerialsFx,
});
