import React from 'react';

import { Dialog } from '@mui/material';

import { useIsAuthorized } from '@entities/user';
import { DialogTypes } from '@shared/constants';
import { useDialogState } from '@shared/hooks';

import { DIALOGS_MAP } from './constants';

const DialogView = () => {
  const { isOpen, key, onClose } = useDialogState('dialog', 300);
  const isAuthorized = useIsAuthorized();

  const Component =
    DIALOGS_MAP[key as DialogTypes] &&
    DIALOGS_MAP[key as DialogTypes](isAuthorized);

  if (!Component) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <Component />
    </Dialog>
  );
};

export default DialogView;
