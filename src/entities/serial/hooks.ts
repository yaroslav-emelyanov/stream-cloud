import { useStore, useStoreMap } from 'effector-react';

import { $serials, pagination } from './serial';
import { $kinopoiskSerials } from './kinopoisk';

export const useSerials = () => useStore($serials);

export const useHasMorePages = () => useStore(pagination.$hasMorePages);

export const useKinopoiskSerial = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskSerials,
    keys: [kinopoiskId],
    fn: (serials, [kinopoiskId]) =>
      serials.find((serial) => serial.kinopoiskId === kinopoiskId),
  });
