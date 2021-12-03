import React from 'react';

import MovieCard from '@components/MovieCard';
import { CircularProgress } from '@mui/material';

import { nextPage, useMovies, useHasMorePages } from '@entities/movie';

import { usePageGate } from './model';
import { EndMessage, ProgressWrapper, InfiniteScroll } from './styles';

const MainPage = () => {
  const movies = useMovies();
  const hasMore = useHasMorePages();

  usePageGate();

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={nextPage}
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
        <MovieCard movie={movie} onClick={() => {}} key={movie.id} />
      ))}
    </InfiniteScroll>
  );
};

export default MainPage;
