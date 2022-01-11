import React from 'react';

import FavoriteCard from './FavoriteCard';
import { useFavoriteMovies } from '@entities/favorite';

import { PageContainer } from './styles';

const FavoritesPage = () => {
  const favoriteMovies = useFavoriteMovies();

  return (
    <PageContainer>
      {favoriteMovies.map((favorite, index, list) => (
        <FavoriteCard
          favoriteMovie={favorite}
          prevCreated={list[index - 1]?.created}
          key={favorite.kinopoiskId}
        />
      ))}
    </PageContainer>
  );
};

export default FavoritesPage;
