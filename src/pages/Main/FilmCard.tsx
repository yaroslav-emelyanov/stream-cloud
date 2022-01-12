import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Card from '@components/Card';
import { Film } from '@entities/films';
import { likeFilm, useIsFavorite } from '@entities/favorite';
import { DialogTypes } from '@shared/constants';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
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
