import { createGate } from 'effector-react';

import { getPremiersFx } from '@entities/premier';
import { KinopoiskMonths } from '@shared/constants';

export const Page = createGate('main-page');

Page.open.watch(() =>
  getPremiersFx({ year: 2021, month: KinopoiskMonths.DECEMBER })
);
