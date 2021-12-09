import React from 'react';

import InfiniteScroll from '@components/InfiniteScroll';

import { pagination, useMovies, useHasMorePages } from '@entities/movie';

import { usePageGate } from './model';

import MovieCard from './MovieCard';
import Filters from './Filters';

const MoviesPage = () => {
  const hasMore = useHasMorePages();
  const movies = useMovies();

  usePageGate();

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={pagination.nextPage}
        hasMore={hasMore}
        filters={<Filters />}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MoviesPage;
