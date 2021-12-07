import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Movie, useKinopoiskMovie } from '@entities/movie';
import { ContentTypes, DialogTypes } from '@shared/constants';

import Card from '@components/Card';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const kinopoiskMovie = useKinopoiskMovie(movie.kinopoisk_id);
  const [, setSearchParams] = useSearchParams();

  const genre = kinopoiskMovie?.movieInfo?.genres[0]?.genre;

  const description = useMemo(
    () =>
      [new Date(movie.year).getFullYear(), genre].filter(Boolean).join(', '),
    [movie.year, genre]
  );

  return (
    <Card
      onClick={() =>
        setSearchParams({
          dialog: DialogTypes.PREVIEW,
          type: ContentTypes.MOVIE,
          kinopoisk_id: movie.kinopoisk_id,
        })
      }
      title={movie.ru_title}
      description={description}
      loading={kinopoiskMovie?.loading}
      posterUrl={kinopoiskMovie?.movieInfo?.posterUrlPreview}
    />
  );
};

export default MovieCard;
