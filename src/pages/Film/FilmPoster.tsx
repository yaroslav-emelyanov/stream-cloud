import React from 'react';

import Poster from '@components/Poster';
import { Skeleton } from '@mui/material';

import { useFilm, useFilmLoading } from '@entities/film';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface FilmPosterProps {
  height: number;
  width: number;
}

const FilmPoster: React.FC<FilmPosterProps> = ({ height, width }) => {
  const isLoading = useFilmLoading();
  const film = useFilm();

  const isFavorite = useIsFavorite(film?.kinopoiskId);

  if (isLoading) {
    return <Skeleton variant="rectangular" height={height} width={width} />;
  }

  return (
    <Poster
      height={height}
      width={width}
      src={film?.posterUrl}
      rating={film?.ratingKinopoisk}
      onChangeFavorite={() => likeFilm(film?.kinopoiskId?.toString() || '')}
      isFavorite={isFavorite}
    />
  );
};

export default FilmPoster;
