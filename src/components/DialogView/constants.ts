import React from 'react';

import { DialogTypes } from '@shared/constants';

import {
  LoginDialog,
  WatchDialog,
  PreviewDialog,
  RegistrationDialog,
} from '@components/Dialogs';

export const DIALOGS_MAP: Record<
  DialogTypes,
  (isAuthorized: boolean, searchParams: URLSearchParams) => React.FC | null
> = {
  [DialogTypes.LOGIN]: (isAuth) => (!isAuth ? LoginDialog : null),
  [DialogTypes.REGISTERATION]: (isAuth) =>
    !isAuth ? RegistrationDialog : null,
  [DialogTypes.PREVIEW]: () => PreviewDialog,
  [DialogTypes.WATCH]: (isAuth) => (isAuth ? WatchDialog : null),
};
