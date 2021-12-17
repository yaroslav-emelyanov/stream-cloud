import { createEffect, restore } from 'effector';

import * as api from '@shared/api';
import { KinopoiskResponse } from '@shared/types';
import { KinopoiskMonths } from '@shared/constants';

import { Premier } from './types';

export interface GetPremierParams {
  year: number;
  month: KinopoiskMonths;
}

export const getPremiersFx = createEffect<GetPremierParams, Premier[]>(
  (params) =>
    api.kinopoisk
      .get<KinopoiskResponse<Premier>>('/v2.2/films/premieres', {
        params,
      })
      .then((response) => response.data.items)
);

export const $premieres = restore(getPremiersFx.doneData, []);
