import { useGate } from 'effector-react';

import { Page } from './page';

export const useFilmPageGate = (params: { kinopoiskId?: string }) =>
  useGate(Page, params);
