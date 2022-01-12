import React from 'react';

import Card from '@components/Card';
import { useNav } from '@shared/hooks';
import { Film } from '@entities/films';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const isFavorite = useIsFavorite(film.filmId.toString());
  const nav = useNav();

  return (
    <Card
      onClick={() => nav.to.film(film.filmId)}
      onClickIcon={() => likeFilm(film.filmId.toString())}
      rating={film.rating}
      description={
        <>
          <div>
            {[film.year, film.genres[0]?.genre].filter(Boolean).join(', ')}
          </div>
          <div>{film.countries[0]?.country}</div>
        </>
      }
      isFavorite={isFavorite}
      posterUrl={film.posterUrlPreview}
      title={film.nameRu}
      key={film.filmId}
    />
  );
};

export default FilmCard;
