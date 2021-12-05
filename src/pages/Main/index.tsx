import React from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '@components/MovieCard';
import { CircularProgress } from '@mui/material';

import { nextPage, useMovies, useHasMorePages } from '@entities/movie';
import { DialogTypes } from '@shared/constants';

import { usePageGate } from './model';
import { EndMessage, ProgressWrapper, InfiniteScroll } from './styles';

const MainPage = () => {
  const [, setSearchParams] = useSearchParams();
  const hasMore = useHasMorePages();
  const movies = useMovies();

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
        <MovieCard
          movie={movie}
          onClick={() =>
            setSearchParams({
              dialog: DialogTypes.PREVIEW,
              kinopoisk_id: movie.kinopoisk_id,
            })
          }
          key={movie.id}
        />
      ))}
    </InfiniteScroll>
  );
};

export default MainPage;
