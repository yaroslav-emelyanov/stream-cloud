import { createEffect, createStore } from 'effector';

import * as api from '@shared/api';
import * as utils from '@shared/utils';
import { VCDNResponse } from '@shared/types';

import { Movie } from './types';

const currentYear = new Date().getFullYear();

export const getMoviesFx = createEffect<number, VCDNResponse<Movie>>((page) =>
  api.videocdn
    .get<VCDNResponse<Movie>>('/movies', {
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

export const $kinopoiskMovies = utils.createKinopoiskMovies(getMoviesFx);

export const pagination = utils.createVCDNPagination(getMoviesFx);

export const $movies = createStore<Movie[]>([]);

$movies.on(getMoviesFx.doneData, (prevMovies, { data: movies }) => [
  ...prevMovies,
  ...movies,
]);
