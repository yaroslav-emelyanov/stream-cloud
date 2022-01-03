import { allSettled, fork } from 'effector';

import {
  selectGenres,
  selectCountries,
  setType,
  setYear,
  setRating,
  setOrder,
  resetFilters,
  setSearch,
} from './filters';
import { FilmOrders, FilmTypes } from './types';
import { $films, getFilmsBySearchFx, getFilmsFx } from './film';
import { $currentPage, $lastPage, nextPage } from './pagination';

describe('film', () => {
  it('get films by pagination', async () => {
    const scope = fork({
      handlers: new Map().set(getFilmsFx, () => ({
        pagesCount: 2,
        films: ['FAKE_FILM_1', 'FAKE_FILM_2'],
      })),
    });

    await allSettled(nextPage, {
      scope,
    });

    expect(scope.getState($currentPage)).toBe(1);
    expect(scope.getState($lastPage)).toBe(2);
    expect(scope.getState($films)).toEqual(['FAKE_FILM_1', 'FAKE_FILM_2']);

    await allSettled(nextPage, {
      scope,
    });

    expect(scope.getState($currentPage)).toBe(2);
  });

  it('get films by filters', async () => {
    const getFilmsFxMock = jest.fn().mockReturnValue({
      pagesCount: 0,
      films: [],
    });

    const scope = fork({
      handlers: [[getFilmsFx, getFilmsFxMock]],
    });

    await allSettled(selectGenres, {
      params: [1, 2],
      scope,
    });

    await allSettled(selectCountries, {
      params: [3, 2, 5],
      scope,
    });

    await allSettled(setType, {
      params: FilmTypes.FILM,
      scope,
    });

    await allSettled(setRating, {
      params: [8, 9],
      scope,
    });

    await allSettled(setYear, {
      params: [2000, 2005],
      scope,
    });

    await allSettled(setOrder, {
      params: FilmOrders.RATING,
      scope,
    });

    expect(getFilmsFxMock).toHaveBeenLastCalledWith({
      page: 1,
      genres: [1, 2],
      countries: [3, 2, 5],
      type: FilmTypes.FILM,
      order: FilmOrders.RATING,
      year: [2000, 2005],
      rating: [8, 9],
    });

    await allSettled(resetFilters, {
      scope,
    });

    expect(getFilmsFxMock).toHaveBeenCalledTimes(7);
    expect(getFilmsFxMock).toHaveBeenLastCalledWith({
      page: 1,
      genres: [],
      countries: [],
      type: FilmTypes.ALL,
      order: FilmOrders.YEAR,
      year: [1888, new Date().getFullYear()],
      rating: [0, 10],
    });
  }, 9000);

  it('get films by search', async () => {
    const getFilmsBySearchFxMock = jest.fn().mockReturnValue({
      pagesCount: 0,
      films: ['FAKE_FILM_1', 'FAKE_FILM_2'],
    });

    const scope = fork({
      handlers: [[getFilmsBySearchFx, getFilmsBySearchFxMock]],
    });

    await allSettled(setSearch, {
      params: 'TEST',
      scope,
    });

    expect(getFilmsBySearchFxMock).toHaveBeenCalledTimes(1);
    expect(getFilmsBySearchFxMock).toHaveBeenLastCalledWith('TEST');
    expect(scope.getState($films)).toEqual(['FAKE_FILM_1', 'FAKE_FILM_2']);

    await allSettled(setSearch, {
      params: '',
      scope,
    });

    expect(getFilmsBySearchFxMock).toHaveBeenCalledTimes(1);
    expect(scope.getState($films)).toEqual([]);
  });
});
