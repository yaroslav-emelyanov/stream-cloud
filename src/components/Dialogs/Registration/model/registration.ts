import { createEffect } from 'effector';
import { UserCredential } from '@firebase/auth';
import { FirebaseError } from '@firebase/app';

import * as api from '@shared/api';
import { handleError } from '@shared/utils';

import { IForm } from './types';

export const registerFx = createEffect<IForm, UserCredential, FirebaseError>(
  ({ email, password }) => api.auth.register(email, password)
);

handleError(registerFx.failData);
