import React, { useMemo } from 'react';

import Card from '@components/Card';

import { useNav } from '@shared/hooks';
import { Premier } from '@entities/premier';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface MainPageProps {
  premier: Premier;
}

const MainCard: React.FC<MainPageProps> = ({ premier }) => {
  const isFavorite = useIsFavorite(premier.kinopoiskId.toString());
  const nav = useNav();

  const genre = premier?.genres[0]?.genre;

  const description = useMemo(
    () =>
      [
        premier?.premiereRu ? new Date(premier.premiereRu).getFullYear() : null,
        genre,
      ]
        .filter(Boolean)
        .join(', '),
    [premier?.premiereRu, genre]
  );

  return (
    <Card
      onClick={() => nav.to.film(premier.kinopoiskId)}
      onClickIcon={() => likeFilm(premier.kinopoiskId.toString())}
      posterUrl={premier.posterUrlPreview}
      key={premier.kinopoiskId}
      description={description}
      title={premier.nameRu}
      isFavorite={isFavorite}
    />
  );
};

export default MainCard;
