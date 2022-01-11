import React from 'react';

import FavoriteCard from './FavoriteCard';
import { useFavorites } from '@entities/favorite';

import { PageContainer } from './styles';
import { usePageGate } from './model';

const FavoritesPage = () => {
  const favorites = useFavorites();

  usePageGate();

  return (
    <PageContainer>
      {favorites.map((favorite, index, list) => (
        <FavoriteCard
          favorite={favorite}
          prevCreated={list[index - 1]?.created}
          key={favorite.kinopoiskId}
        />
      ))}
    </PageContainer>
  );
};

export default FavoritesPage;
