import { attach, guard, sample, Unit } from 'effector';
import { $serial, getSerialFx } from './serial';

export const watchSerial = (clock: Unit<string | null>) => {
  const getCurrentSerial = sample({
    clock,
    source: $serial,
    fn: (movie, kinopoisk_id) => ({ kinopoisk_id, movie }),
  });

  const getCurrentMovieFx = attach({
    effect: getSerialFx,
    mapParams: (params: Parameters<typeof getCurrentSerial>[0]) =>
      params?.kinopoisk_id || null,
  });

  guard({
    clock: getCurrentSerial,
    filter: ({ kinopoisk_id, movie }) => movie?.kinopoisk_id !== kinopoisk_id,
    target: getCurrentMovieFx,
  });
};
