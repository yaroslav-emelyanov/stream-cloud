import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Card from '@components/Card';
import { DialogTypes } from '@shared/constants';
import { KinopoiskSimilarFilm } from '@shared/types';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface SimilarCardProps {
  film: KinopoiskSimilarFilm;
}

const SimilarCard: React.FC<SimilarCardProps> = ({ film }) => {
  const isFavorite = useIsFavorite(film.filmId.toString());
  const [, setSearchParams] = useSearchParams();

  return (
    <Card
      onClick={() =>
        setSearchParams({
          dialog: DialogTypes.PREVIEW,
          kinopoisk_id: film.filmId.toString(),
        })
      }
      onClickIcon={() => likeFilm(film.filmId.toString())}
      title={film.nameRu}
      posterUrl={film.posterUrlPreview}
      isFavorite={isFavorite}
    />
  );
};

export default SimilarCard;
