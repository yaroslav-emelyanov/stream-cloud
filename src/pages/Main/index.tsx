import React from 'react';
import { useSearchParams } from 'react-router-dom';

import InfiniteScroll from '@components/InfiniteScroll';
import Card from '@components/Card';

import {
  nextPage,
  useFilms,
  useFiltersLoading,
  useHasMorePages,
  useLoading,
} from '@entities/film';
import { DialogTypes } from '@shared/constants';

import Filters from './Filters';
import FiltersProgress from './FiltersProgress';

import { useMainGate } from './model';

const MainPage = () => {
  const [, setSearchParams] = useSearchParams();
  const hasMore = useHasMorePages();
  const isLoading = useLoading();
  const films = useFilms();
  const isFiltersLoading = useFiltersLoading();

  useMainGate();

  return (
    <>
      <FiltersProgress show={isFiltersLoading} />
      <InfiniteScroll
        filters={<Filters />}
        loadMore={nextPage}
        loading={isLoading}
        hasMore={hasMore}
      >
        {films.map((film) => (
          <Card
            onClick={() =>
              setSearchParams({
                dialog: DialogTypes.PREVIEW,
                kinopoisk_id: film.filmId.toString(),
              })
            }
            rating={film.rating}
            description={
              <>
                <div>
                  {[film.year, film.genres[0]?.genre]
                    .filter(Boolean)
                    .join(', ')}
                </div>
                <div>{film.countries[0]?.country}</div>
              </>
            }
            posterUrl={film.posterUrlPreview}
            title={film.nameRu}
            key={film.filmId}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MainPage;
