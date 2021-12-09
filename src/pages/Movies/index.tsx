import React from 'react';

import InfiniteScroll from '@components/InfiniteScroll';

import {
  useMovies,
  pagination,
  useHasMorePages,
  useIsLoadingMovies,
} from '@entities/movie';

import { usePageGate } from './model';

import MovieCard from './MovieCard';
import Filters from './Filters';

const MoviesPage = () => {
  const isLoading = useIsLoadingMovies();
  const hasMore = useHasMorePages();
  const movies = useMovies();

  usePageGate();

  return (
    <>
      <InfiniteScroll
        loading={isLoading}
        loadMore={pagination.nextPage}
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
