import { useStore, useStoreMap } from 'effector-react';

import { $serials, getSerialsFx, $kinopoiskSerials } from './serials';
import { pagination } from './pagination';
import { $filters } from './filters';

export const useSerials = () => useStore($serials);

export const useIsLoadingSerials = () => useStore(getSerialsFx.pending);

export const useFilters = () => useStore($filters);

export const useHasMorePages = () => useStore(pagination.$hasMorePages);

export const useKinopoiskSerial = (kinopoiskId: string) =>
  useStoreMap({
    store: $kinopoiskSerials,
    keys: [kinopoiskId],
    fn: (serials, [kinopoiskId]) =>
      serials.find((serial) => serial.kinopoiskId === kinopoiskId),
  });
