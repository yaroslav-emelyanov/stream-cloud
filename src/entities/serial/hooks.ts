import { useStore, useStoreMap } from 'effector-react';

import { $serials, $kinopoiskSerials, pagination } from './serials';
import { $currentSerial, $currentMovieIsLoading } from './serial';

export const useSerials = () => useStore($serials);

export const useHasMorePages = () => useStore(pagination.$hasMorePages);

export const useKinopoiskSerial = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskSerials,
    keys: [kinopoiskId],
    fn: (serials, [kinopoiskId]) =>
      serials.find((serial) => serial.kinopoiskId === kinopoiskId),
  });

export const useCurrentSerial = () => useStore($currentSerial);
export const useCurrentSerialIsLoading = () => useStore($currentMovieIsLoading);
