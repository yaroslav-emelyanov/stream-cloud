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
import ErrorIcon from '@mui/icons-material/Error';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import {
  useDialogMovie,
  useDialogMovieIsLoading,
} from '@entities/dialog-movie';
import { DialogTypes } from '@shared/constants';
import { parseIdYouTubeUrl } from '@shared/utils';
import { useIsAuthorized } from '@entities/user';

import { useDialogGate } from './model';
import SimilarMovieSlider from './SimilarMovieSlider';
import { NotFoundPreview, PREVIEW_HEIGHT, SkeletonPreview } from './styles';

const PreviewDialog = () => {
  const { movie, info, trailer, similarMovies } = useDialogMovie();
  const [search, setSearchParams] = useSearchParams();
  const isLoading = useDialogMovieIsLoading();
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
      <DialogTitle>{info?.nameRu}</DialogTitle>
      <DialogContent>
        {trailer ? (
          <iframe
            width="100%"
            height={PREVIEW_HEIGHT}
            src={`https://www.youtube.com/embed/${parseIdYouTubeUrl(
              trailer?.url
            )}`}
            title={info?.nameRu}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <NotFoundPreview>трейлер не найден</NotFoundPreview>
        )}
        <div style={{ height: 16 }} />
        <Typography variant="body2">{info?.description}</Typography>
        {!!similarMovies.length && (
          <>
            <div style={{ height: 16 }} />
            <Typography>Похожие</Typography>
            <div style={{ height: 16 }} />
            <SimilarMovieSlider list={similarMovies} />
          </>
        )}
      </DialogContent>
      <DialogActions>
        {movie ? (
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
                    kinopoisk_id: movie.kp_id,
                  })
                }
                variant="contained"
                disabled={!isAuthorized}
              >
                смотреть
              </Button>
            </span>
          </Tooltip>
        ) : (
          <Button endIcon={<ErrorIcon />} variant="contained" disabled>
            Видео не найдено
          </Button>
        )}
      </DialogActions>
    </>
  );
};

export default PreviewDialog;
