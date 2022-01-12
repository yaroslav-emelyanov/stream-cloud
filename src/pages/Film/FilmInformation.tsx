import React from 'react';

import { useFilm, useFilmLoading } from '@entities/film';
import { Box, Skeleton } from '@mui/material';

const FilmInformation = () => {
  const isLoading = useFilmLoading();
  const film = useFilm();

  if (isLoading) {
    return (
      <Box mt={4} mb={4}>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="20%" />
        <div style={{ height: 16 }} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Box>
    );
  }

  return (
    <Box mt={4} mb={4}>
      <div>
        <b>Год:</b> {film?.year}
      </div>
      <div>
        <b>Страна:</b>{' '}
        {film?.countries.map(({ country }) => country).join(', ')}
      </div>
      <div>
        <b>Жанр:</b> {film?.genres.map(({ genre }) => genre).join(', ')}
      </div>
      <div style={{ height: 16 }} />
      <div>
        <b>Описание:</b> {film?.description}
      </div>
    </Box>
  );
};

export default FilmInformation;
