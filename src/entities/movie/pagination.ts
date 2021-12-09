import { sample } from 'effector';

import * as utils from '@shared/utils';

import { getMoviesFx } from './movies';
import { $filters } from './filters';

export const pagination = utils.createVCDNPagination(getMoviesFx.doneData);

sample({
  clock: pagination.nextPage,
  source: [pagination.$currentPage, $filters],
  fn: ([page, filters]) => ({ page: page + 1, ...filters }),
  target: getMoviesFx,
});
