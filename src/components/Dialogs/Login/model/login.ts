import { createEffect } from 'effector';
import { FirebaseError } from '@firebase/util';
import { UserCredential } from '@firebase/auth';

import * as api from '@shared/api';
import { handleError } from '@shared/utils';

import { IForm } from './types';

export const loginFx = createEffect<IForm, UserCredential, FirebaseError>(
  ({ email, password }) => api.auth.login(email, password)
);

handleError(loginFx.failData);
