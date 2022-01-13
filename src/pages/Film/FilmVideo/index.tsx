import React from 'react';

import { Button, Skeleton } from '@mui/material';
import ContentError from '@components/ContentError';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useIframeSrc, useIframeSrcLoading } from '@entities/film';
import { useIsAuthorized } from '@entities/user';
import { useNav } from '@shared/hooks';

import { NotAuthorizedContainer } from './styles';

interface FilmVideoProps {
  height: number;
}

const FilmVideo: React.FC<FilmVideoProps> = ({ height }) => {
  const isLoading = useIframeSrcLoading();
  const isAuthorized = useIsAuthorized();
  const iframeSrc = useIframeSrc();
  const nav = useNav();

  if (isLoading) {
    return <Skeleton variant="rectangular" height={height} width="100%" />;
  }

  if (!iframeSrc) {
    return (
      <ContentError height={height} width="100%" message="Видео не найдено" />
    );
  }

  if (isAuthorized) {
    return (
      <iframe
        src={iframeSrc}
        title="Video"
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
      />
    );
  }

  return (
    <NotAuthorizedContainer height={height}>
      <Button
        size="large"
        variant="outlined"
        color="inherit"
        onClick={nav.open.login}
        endIcon={<LockOpenIcon />}
      >
        Авторизоваться для просмотра
      </Button>
    </NotAuthorizedContainer>
  );
};

export default FilmVideo;
