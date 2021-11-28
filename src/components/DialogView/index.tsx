import React from 'react';

import { Dialog } from '@mui/material';
import { DialogTypes } from '@shared/constants';
import { useDialogState } from '@shared/hooks';

import { dialogs } from './dialog.config';

const DialogView = () => {
  const { isOpen, key, onClose } = useDialogState('dialog', 300);

  const Component = dialogs[key as DialogTypes];

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
