import { useStore, useStoreMap } from 'effector-react';

import { $history, $historyFilms } from './history';

export const useHistory = () => useStore($history);

export const useHistoryMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $historyFilms,
    keys: [kinopoiskId],
    fn: (films, [id]) => films[id],
  });
