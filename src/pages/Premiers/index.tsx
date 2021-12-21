import React from 'react';

import { usePremiers } from '@entities/premier';
import { Box, CircularProgress } from '@mui/material';

import PremierCard from './PremierCard';
import { PremierContainer } from './styles';
import { useLoading, usePageGate } from './model';

const PremierPage = () => {
  const premiers = usePremiers();
  const loading = useLoading();

  usePageGate();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <PremierContainer>
      {premiers.map((premier) => (
        <PremierCard premier={premier} key={premier.kinopoiskId} />
      ))}
    </PremierContainer>
  );
};

export default PremierPage;
