import React from 'react';

import { DialogTypes } from '@shared/constants';

import { LoginDialog, RegistrationDialog } from '@components/Dialogs';

export const dialogs: Record<DialogTypes, React.FC> = {
  [DialogTypes.LOGIN]: LoginDialog,
  [DialogTypes.REGISTERATION]: RegistrationDialog,
};
