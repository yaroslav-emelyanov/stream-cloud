import { createEffect, createStore } from 'effector';

import dayjs from 'dayjs';

import * as api from '@shared/api';
import * as utils from '@shared/utils';
import { VCDNResponse } from '@shared/types';

import { Movie } from './types';

export interface GetMoviesParams {
  page: number;
  query?: string;
  year?: Date | null;
}

export const getMoviesFx = createEffect<GetMoviesParams, VCDNResponse<Movie>>(
  ({ page, query, year }) =>
    api.videocdn
      .get<VCDNResponse<Movie>>('/movies', {
        params: {
          page,
          query,
          year: year ? dayjs(year).year() : year,
          limit: 30,
          direction: 'desc',
          ordering: 'released',
        },
      })
      .then((response) => response.data)
);
export const $kinopoiskMovies =
  utils.createKinopoiskMoviesStoreByVDCN(getMoviesFx);

export const $movies = createStore<Movie[]>([]);

$movies.on(getMoviesFx.doneData, (prevMovies, { data: movies }) => [
  ...prevMovies,
  ...movies,
]);
