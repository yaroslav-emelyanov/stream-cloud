import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from '@components/MovieCard';
import { CircularProgress } from '@mui/material';

import { nextPage, useMovies, useHasMorePages } from '@entities/movie';

import { usePageGate } from './model';

const MainPage = () => {
  const movies = useMovies();
  const hasMore = useHasMorePages();

  usePageGate();

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={nextPage}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      loader={
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <CircularProgress />
        </div>
      }
      hasMore={hasMore}
      style={{
        padding: 32,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </InfiniteScroll>
  );
};

export default MainPage;
