import { createGate } from 'effector-react';
import { Unsubscribe } from '@firebase/auth';

import * as api from '@shared/api';
import { setUser } from '@entities/user';

export const Page = createGate('app');

let unsubsribe: Unsubscribe = () => {};

Page.open.watch(() => {
  unsubsribe = api.auth.subscribeOnUserChanged(setUser);
});

Page.close.watch(unsubsribe);
