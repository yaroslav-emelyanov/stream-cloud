import { useGate, useStore } from 'effector-react';

import { getPremiersFx } from '@entities/premier';
import { Page } from './main';

export const usePageGate = () => useGate(Page);

export const useLoading = () => useStore(getPremiersFx.pending);
