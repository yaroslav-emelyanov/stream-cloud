import { createEffect, createStore } from 'effector';

import * as api from '@shared/api';
import * as utils from '@shared/utils';
import { VCDNResponse } from '@shared/types';

import { Serial } from './types';

const currentYear = new Date().getFullYear();

export const getSerialsFx = createEffect<number, VCDNResponse<Serial>>((page) =>
  api.videocdn
    .get<VCDNResponse<Serial>>('/tv-series', {
      params: {
        page,
        limit: 30,
        year: currentYear,
        direction: 'desc',
        ordering: 'released',
      },
    })
    .then((response) => response.data)
);

export const $serials = createStore<Serial[]>([]);

$serials.on(getSerialsFx.doneData, (prevSerials, { data: serials }) => [
  ...prevSerials,
  ...serials,
]);

export const pagination = utils.createVCDNPagination(getSerialsFx);
