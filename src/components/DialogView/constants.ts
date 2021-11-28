import React from 'react';

import { DialogTypes } from '@shared/constants';

import { LoginDialog, RegistrationDialog } from '@components/Dialogs';

export const DIALOGS_MAP: Record<
  DialogTypes,
  (isAuthorized: boolean) => React.FC | null
> = {
  [DialogTypes.LOGIN]: (isAuth) => (!isAuth ? LoginDialog : null),
  [DialogTypes.REGISTERATION]: (isAuth) =>
    !isAuth ? RegistrationDialog : null,
};
