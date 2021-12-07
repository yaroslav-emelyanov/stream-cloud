import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCurrentMovie, useCurrentMovieIsLoading } from '@entities/movie';
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

const MovieWatchDialog = () => {
  const [search, setSearchParams] = useSearchParams();
  const isLoading = useCurrentMovieIsLoading();
  const [movie] = useCurrentMovie();

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
      <DialogTitle>{movie?.ru_title}</DialogTitle>
      <DialogContent>
        <iframe
          src={movie?.preview_iframe_src}
          title={movie?.ru_title}
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
              type: ContentTypes.MOVIE,
              kinopoisk_id: movie?.kinopoisk_id || '',
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

export default MovieWatchDialog;
