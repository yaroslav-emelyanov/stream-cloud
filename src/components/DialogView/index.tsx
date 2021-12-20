import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Dialog, useMediaQuery, useTheme } from '@mui/material';

import { useIsAuthorized } from '@entities/user';
import { DialogTypes } from '@shared/constants';
import { useDialogState } from '@shared/hooks';

import { DIALOGS_MAP } from './constants';

const DialogView = () => {
  const { isOpen, key, onClose } = useDialogState('dialog', 300);
  const [searchParams] = useSearchParams();
  const isAuthorized = useIsAuthorized();

  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const Component =
    DIALOGS_MAP[key as DialogTypes] &&
    DIALOGS_MAP[key as DialogTypes](isAuthorized, searchParams);

  if (!Component) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen={smMatch} fullWidth>
      <Component />
    </Dialog>
  );
};

export default DialogView;
