import React from 'react';
import { useSearchParams } from 'react-router-dom';

import InfiniteScroll from '@components/InfiniteScroll';
import Card from '@components/Card';

import {
  nextPage,
  useFilms,
  useHasMorePages,
  useLoading,
} from '@entities/film';
import { DialogTypes } from '@shared/constants';

import Filters from './Filters';
import { useMainGate } from './model';

const MainPage = () => {
  const [, setSearchParams] = useSearchParams();
  const hasMore = useHasMorePages();
  const isLoading = useLoading();
  const films = useFilms();

  useMainGate();

  return (
    <>
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
            description={[film.year, film.genres[0]?.genre]
              .filter(Boolean)
              .join(', ')}
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
