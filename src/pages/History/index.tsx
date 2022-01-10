import React from 'react';

import { useMovieHistory } from '@entities/history';

import HistoryCard from './HistoryCard';
import { PageContainer } from './styles';

const HistoryPage = () => {
  const movies = useMovieHistory();

  return (
    <PageContainer>
      {movies.map((movie, index, list) => (
        <HistoryCard
          movie={movie}
          prevHistoryDate={list[index - 1]?.added_to_history}
          key={movie.kinopoiskId}
        />
      ))}
    </PageContainer>
  );
};

export default HistoryPage;
