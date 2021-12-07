import React from 'react';

import { CircularProgress } from '@mui/material';

import { pagination, useMovies, useHasMorePages } from '@entities/movie';

import { usePageGate } from './model';
import { EndMessage, ProgressWrapper, InfiniteScroll } from './styles';

import MovieCard from './MovieCard';

const MoviesPage = () => {
  const hasMore = useHasMorePages();
  const movies = useMovies();

  usePageGate();

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={pagination.nextPage}
      endMessage={
        <EndMessage variant="body1" align="center">
          Больше нет записей
        </EndMessage>
      }
      loader={
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      }
      hasMore={hasMore}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </InfiniteScroll>
  );
};

export default MoviesPage;
