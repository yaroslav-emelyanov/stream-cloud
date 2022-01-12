import React from 'react';

import { Box, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useFilm, useFilmLoading } from '@entities/film';
import { useNav } from '@shared/hooks';

const Header = () => {
  const isLoading = useFilmLoading();
  const film = useFilm();
  const nav = useNav();

  return (
    <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
      <IconButton onClick={nav.back}>
        <ArrowBackIcon />
      </IconButton>
      {isLoading ? (
        <Stack width="100%" spacing={1}>
          <Skeleton variant="rectangular" height={32} width="45%" />
          <Skeleton variant="rectangular" height={14} width="25%" />
        </Stack>
      ) : (
        <div>
          <Typography variant="h5">
            <b>{film?.nameRu}</b>
          </Typography>
          <Typography variant="caption">{film?.nameOriginal}</Typography>
        </div>
      )}
    </Box>
  );
};

export default Header;
