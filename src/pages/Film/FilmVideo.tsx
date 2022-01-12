import React from 'react';

import { Skeleton } from '@mui/material';
import { useIframeSrc, useIframeSrcLoading } from '@entities/film';

interface FilmVideoProps {
  height: number;
}

const FilmVideo: React.FC<FilmVideoProps> = ({ height }) => {
  const isLoading = useIframeSrcLoading();
  const iframeSrc = useIframeSrc();

  if (isLoading) {
    return <Skeleton variant="rectangular" height={height} width="100%" />;
  }

  return (
    <iframe
      src={iframeSrc || ''}
      title="Video"
      width="100%"
      style={{ height }}
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default FilmVideo;
