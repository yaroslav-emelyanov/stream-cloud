import { createEffect, createEvent, createStore, Effect } from 'effector';

import * as api from '@shared/api';

import {
  KinopoiskMovieListItem,
  KinopoiskMovie,
  VCDNResponse,
} from '@shared/types';
import { Premier } from '@entities/premier';

export const createKinopoiskMoviesStoreByVDCN = <
  T extends { id: number; kinopoisk_id: string }
>(
  effect: Effect<any, VCDNResponse<T>>
) => {
  const getKinopoiskMovieFx = createEffect<string, KinopoiskMovie>(
    (kinopoiskId) =>
      api.kinopoisk
        .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
        .then((response) => response.data)
  );

  const hideLoadingById = createEvent<number>();

  effect.doneData.watch(async ({ data: items }) => {
    for (const item of items) {
      if (item.kinopoisk_id) {
        await getKinopoiskMovieFx(item.kinopoisk_id).catch(() => {});
      } else {
        hideLoadingById(item.id);
      }
    }
  });

  const $kinopoiskItems = createStore<KinopoiskMovieListItem[]>([]).on(
    effect.doneData,
    (prevItems, { data: items }) => [
      ...prevItems,
      ...items.map<KinopoiskMovieListItem>((item) => ({
        movieId: item.id,
        kinopoiskId: item.kinopoisk_id,
        info: null,
        loading: true,
      })),
    ]
  );

  $kinopoiskItems
    .on(getKinopoiskMovieFx.doneData, (items, kinopoiskItem) =>
      items.map<KinopoiskMovieListItem>((item) =>
        item.kinopoiskId === kinopoiskItem.kinopoiskId.toString()
          ? { ...item, info: kinopoiskItem, loading: false }
          : item
      )
    )
    .on(hideLoadingById, (items, movieId) =>
      items.map<KinopoiskMovieListItem>((item) =>
        item.movieId === movieId ? { ...item, loading: false } : item
      )
    );

  return $kinopoiskItems;
};

export const createKinopoiskMoviesStore = (effect: Effect<any, Premier[]>) => {
  const getKinopoiskMovieFx = createEffect<number, KinopoiskMovie>(
    (kinopoiskId) =>
      api.kinopoisk
        .get<KinopoiskMovie>(`/v2.2/films/${kinopoiskId}`)
        .then((response) => response.data)
  );

  const hideLoadingById = createEvent<number>();

  effect.doneData.watch(async (items) => {
    for (const item of items) {
      if (item.kinopoiskId) {
        await getKinopoiskMovieFx(item.kinopoiskId).catch(() => {});
      } else {
        hideLoadingById(item.kinopoiskId);
      }
    }
  });

  const $kinopoiskItems = createStore<KinopoiskMovie[]>([]).on(
    getKinopoiskMovieFx.doneData,
    (prevItems, item) => [...prevItems, item]
  );

  const $kinopoiskItemsLoading = createStore<
    { kinopoiskId: number; loading: boolean }[]
  >([])
    .on(effect.doneData, (prevItems, items) => [
      ...prevItems,
      ...items.map((item) => ({
        kinopoiskId: item.kinopoiskId,
        loading: true,
      })),
    ])
    .on(getKinopoiskMovieFx.doneData, (items, kinopoiskMovie) =>
      items.map((item) =>
        item.kinopoiskId === kinopoiskMovie.kinopoiskId
          ? { ...item, loading: false }
          : item
      )
    )
    .on(hideLoadingById, (items, kinopoiskId) =>
      items.map((item) =>
        item.kinopoiskId === kinopoiskId ? { ...item, loading: false } : item
      )
    );

  return { $kinopoiskItems, $kinopoiskItemsLoading };
};
