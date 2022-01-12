import React from 'react';

import { useSimilarFilms, useSimilarFilmsLoading } from '@entities/film';

import { Box, Typography } from '@mui/material';

import SimilarCard from './SimilarCard';

const SimilarFilms = () => {
  const isSimilarLoading = useSimilarFilmsLoading();
  const similarFilms = useSimilarFilms();

  if (isSimilarLoading || !similarFilms.length) {
    return null;
  }

  return (
    <Box mt={4}>
      <Typography variant="h6">Похожие</Typography>
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        {similarFilms.map((film) => (
          <SimilarCard film={film} key={film.filmId} />
        ))}
      </Box>
    </Box>
  );
};

export default SimilarFilms;
