import { createEffect } from 'effector';

import * as api from '@shared/api';
import { handleError } from '@shared/utils';

export const logoutFx = createEffect(() => api.auth.logout());

handleError(logoutFx.failData);
