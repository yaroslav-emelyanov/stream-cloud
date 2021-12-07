import { createEffect, createEvent, createStore, Effect } from 'effector';

import * as api from '@shared/api';

import {
  KinopoiskMovieListItem,
  KinopoiskMovie,
  VCDNResponse,
} from '@shared/types';

export const createKinopoiskMovies = <
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
