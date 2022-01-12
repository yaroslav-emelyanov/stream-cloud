import React from 'react';

import { Skeleton } from '@mui/material';

import { parseIdYouTubeUrl } from '@shared/utils';
import { useFilmTrailer, useFilmTrailerLoading } from '@entities/film';

interface FilmTrailerProps {
  height: number;
}

const FilmTrailer: React.FC<FilmTrailerProps> = ({ height }) => {
  const isLoading = useFilmTrailerLoading();
  const trailer = useFilmTrailer();

  if (isLoading) {
    return (
      <Skeleton variant="rectangular" height={height} style={{ flex: 1 }} />
    );
  }
  return (
    <iframe
      style={{ flex: 1 }}
      height={height}
      src={`https://www.youtube.com/embed/${parseIdYouTubeUrl(trailer?.url)}`}
      frameBorder="0"
      title="YouTube"
      allowFullScreen
    ></iframe>
  );
};

export default FilmTrailer;
