import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Card from '@components/Card';

import { Premier } from '@entities/premier';
import { DialogTypes } from '@shared/constants';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface MainPageProps {
  premier: Premier;
}

const MainCard: React.FC<MainPageProps> = ({ premier }) => {
  const isFavorite = useIsFavorite(premier.kinopoiskId.toString());
  const [, setSearchParams] = useSearchParams();

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
      onClick={() => {
        setSearchParams({
          dialog: DialogTypes.PREVIEW,
          kinopoisk_id: premier.kinopoiskId.toString(),
        });
      }}
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
