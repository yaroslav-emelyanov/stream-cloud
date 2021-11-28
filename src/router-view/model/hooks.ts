import { useGate } from 'effector-react';

import { Page } from './router';

export const useRouterGate = () => useGate(Page);
