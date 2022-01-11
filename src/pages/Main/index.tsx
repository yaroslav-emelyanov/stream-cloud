import React from 'react';

import InfiniteScroll from '@components/InfiniteScroll';

import {
  nextPage,
  useFilms,
  useFiltersLoading,
  useHasMorePages,
  useLoading,
  useSearchLoading,
} from '@entities/film';

import Filters from './Filters';
import FiltersProgress from './FiltersProgress';

import { useMainGate } from './model';
import FilmCard from './FilmCard';

const MainPage = () => {
  const hasMore = useHasMorePages();
  const isLoading = useLoading();
  const films = useFilms();
  const isFiltersLoading = useFiltersLoading();
  const isSearchLoading = useSearchLoading();

  useMainGate();

  return (
    <>
      <FiltersProgress show={isFiltersLoading || isSearchLoading} />
      <InfiniteScroll
        filters={<Filters />}
        loadMore={nextPage}
        loading={isLoading || isSearchLoading}
        hasMore={hasMore}
      >
        {films.map((film) => (
          <FilmCard film={film} key={film.filmId} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MainPage;
