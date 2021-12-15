import { createGate } from 'effector-react';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import { getPremiersFx } from '@entities/premier';
import { KinopoiskMonths } from '@shared/constants';

dayjs.extend(localeData);

export const Page = createGate('main-page');

const date = dayjs();

const year = date.year();
const month = dayjs.months()[date.month()].toUpperCase() as KinopoiskMonths;

Page.open.watch(() => getPremiersFx({ year, month }));
