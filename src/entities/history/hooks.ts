import { useStore, useStoreMap } from 'effector-react';

import { $history, $historyMovies } from './history';

export const useHistory = () => useStore($history);

export const useHistoryMovie = (kinopoiskId: string) =>
  useStoreMap({
    store: $historyMovies,
    keys: [kinopoiskId],
    fn: (movies, [id]) => movies[id],
  });
