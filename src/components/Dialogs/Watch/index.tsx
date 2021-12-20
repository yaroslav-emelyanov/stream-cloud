import React from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  useDialogMovie,
  useDialogMovieIsLoading,
} from '@entities/dialog-movie';
import { DialogTypes } from '@shared/constants';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from '@mui/material';

import { useDialogGate } from './model';
import { SkeletonWatch, NotFoundWatch, WATCH_HEIGHT } from './styles';

const WatchDialog = () => {
  const [search, setSearchParams] = useSearchParams();
  const isLoading = useDialogMovieIsLoading();
  const { movie } = useDialogMovie();

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
      <DialogTitle>{movie?.title}</DialogTitle>
      <DialogContent>
        {movie ? (
          <iframe
            src={movie?.iframe_src}
            title={movie?.title}
            width="100%"
            height={WATCH_HEIGHT}
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <NotFoundWatch>Видео не найдено</NotFoundWatch>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSearchParams({})} variant="outlined">
          Назад
        </Button>
        <Button
          onClick={() =>
            setSearchParams({
              dialog: DialogTypes.PREVIEW,
              kinopoisk_id: movie?.kp_id || '',
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

export default WatchDialog;
