import { createEffect, createStore } from 'effector';

import dayjs from 'dayjs';

import * as api from '@shared/api';
import * as utils from '@shared/utils';
import { VCDNResponse } from '@shared/types';

import { Serial } from './types';

export interface GetSerialsParams {
  page: number;
  year: Date | null;
  query: string;
}

export const getSerialsFx = createEffect<
  GetSerialsParams,
  VCDNResponse<Serial>
>(({ page, year, query }) =>
  api.videocdn
    .get<VCDNResponse<Serial>>('/tv-series', {
      params: {
        page,
        query,
        limit: 30,
        year: year ? dayjs(year).year() : year,
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

export const $kinopoiskSerials =
  utils.createKinopoiskMoviesStoreByVDCN(getSerialsFx);
