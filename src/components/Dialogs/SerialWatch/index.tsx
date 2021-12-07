import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCurrentSerial, useCurrentSerialIsLoading } from '@entities/serial';
import { ContentTypes, DialogTypes } from '@shared/constants';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from '@mui/material';

import { useDialogGate } from './model';
import { SkeletonWatch, WATCH_HEIGHT } from './styles';

const SerialWatchDialog = () => {
  const [search, setSearchParams] = useSearchParams();
  const isLoading = useCurrentSerialIsLoading();
  const [serial] = useCurrentSerial();

  useDialogGate(search.get('kinopoisk_id'));

  if (isLoading) {
    return (
      <>
        <DialogTitle>
          <Skeleton variant="text" width="40%" />
        </DialogTitle>
        <DialogContent>
          <SkeletonWatch variant="rectangular" />
        </DialogContent>
        <DialogActions>
          <Skeleton variant="rectangular" height={36.5} width="20%" />
        </DialogActions>
      </>
    );
  }

  return (
    <>
      <DialogTitle>{serial?.ru_title}</DialogTitle>
      <DialogContent>
        <iframe
          src={serial?.preview_iframe_src}
          title={serial?.ru_title}
          width="100%"
          height={WATCH_HEIGHT}
          frameBorder="0"
          allowFullScreen
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            setSearchParams({
              dialog: DialogTypes.PREVIEW,
              type: ContentTypes.SERIAL,
              kinopoisk_id: serial?.kinopoisk_id || '',
            })
          }
          variant="contained"
        >
          Смотреть трейлер
        </Button>
      </DialogActions>
    </>
  );
};

export default SerialWatchDialog;
