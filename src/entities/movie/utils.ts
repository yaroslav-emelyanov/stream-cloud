import { attach, guard, sample, Unit } from 'effector';
import { $movie, getMovieFx } from './movie';

export const watchMovie = (clock: Unit<string | null>) => {
  const getCurrentMovie = sample({
    clock,
    source: $movie,
    fn: (movie, kinopoisk_id) => ({ kinopoisk_id, movie }),
  });

  const getCurrentMovieFx = attach({
    effect: getMovieFx,
    mapParams: (params: Parameters<typeof getCurrentMovie>[0]) =>
      params?.kinopoisk_id || null,
  });

  guard({
    clock: getCurrentMovie,
    filter: ({ kinopoisk_id, movie }) => movie?.kinopoisk_id !== kinopoisk_id,
    target: getCurrentMovieFx,
  });
};
