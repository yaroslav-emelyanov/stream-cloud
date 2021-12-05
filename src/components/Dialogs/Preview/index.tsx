import React from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Skeleton,
  Tooltip,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useCurrentMovie, useCurrentMovieIsLoading } from '@entities/movie';
import { parseIdYouTubeUrl } from '@shared/utils';
import { useIsAuthorized } from '@entities/user';
import { DialogTypes } from '@shared/constants';

import { useDialogGate } from './model';
import { NotFoundPreview, PREVIEW_HEIGHT, SkeletonPreview } from './styles';

const PreviewDialog = () => {
  const [movie, kinopoisk, video] = useCurrentMovie();
  const [search, setSearchParams] = useSearchParams();
  const isLoading = useCurrentMovieIsLoading();
  const isAuthorized = useIsAuthorized();

  useDialogGate(search.get('kinopoisk_id'));

  if (isLoading) {
    return (
      <>
        <DialogTitle>
          <Skeleton variant="text" width="40%" />
        </DialogTitle>
        <DialogContent>
          <SkeletonPreview variant="rectangular" />
          <div style={{ height: 10 }} />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="70%" />
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
        {video ? (
          <iframe
            width="100%"
            height={PREVIEW_HEIGHT}
            src={`https://www.youtube.com/embed/${parseIdYouTubeUrl(
              video?.url
            )}`}
            title={movie?.ru_title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <NotFoundPreview>трейлер не найден</NotFoundPreview>
        )}
        <div style={{ height: 10 }} />
        <Typography variant="body2">{kinopoisk?.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Tooltip
          title={isAuthorized ? '' : 'авторизируйтесь для просмотра'}
          placement="top-end"
        >
          <span>
            <Button
              endIcon={isAuthorized ? <PlayArrowIcon /> : <LockIcon />}
              onClick={() =>
                setSearchParams({
                  dialog: DialogTypes.WATCH,
                  kinopoisk_id: movie?.kinopoisk_id || '',
                })
              }
              variant="contained"
              disabled={!isAuthorized}
            >
              смотреть
            </Button>
          </span>
        </Tooltip>
      </DialogActions>
    </>
  );
};

export default PreviewDialog;
