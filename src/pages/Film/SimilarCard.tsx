import React from 'react';

import Card from '@components/Card';
import { useNav } from '@shared/hooks';
import { KinopoiskSimilarFilm } from '@shared/types';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface SimilarCardProps {
  film: KinopoiskSimilarFilm;
}

const SimilarCard: React.FC<SimilarCardProps> = ({ film }) => {
  const isFavorite = useIsFavorite(film.filmId.toString());
  const nav = useNav();

  return (
    <Card
      onClick={() => nav.to.film(film.filmId)}
      onClickIcon={() => likeFilm(film.filmId.toString())}
      title={film.nameRu}
      posterUrl={film.posterUrlPreview}
      isFavorite={isFavorite}
    />
  );
};

export default SimilarCard;
