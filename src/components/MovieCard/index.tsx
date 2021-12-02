import React, { useMemo } from 'react';

import { CardMedia, Typography } from '@mui/material';
import { Movie, useKinopoiskMovie } from '@entities/movie';

import {
  Card,
  Skeleton,
  CardContent,
  CardActionArea,
  NotFoundCardMedia,
  HEIGHT_CARD_MEDIA,
} from './styles';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const kinopoiskMovie = useKinopoiskMovie(movie.kinopoisk_id);

  const genre = kinopoiskMovie?.movieInfo?.genres[0]?.genre;

  const description = useMemo(
    () =>
      [new Date(movie.year).getFullYear(), genre].filter(Boolean).join(', '),
    [movie.year, genre]
  );

  return (
    <Card>
      <CardActionArea>
        {kinopoiskMovie?.loading ? (
          <Skeleton variant="rectangular" />
        ) : kinopoiskMovie?.movieInfo?.posterUrlPreview ? (
          <CardMedia
            component="img"
            alt={movie.ru_title}
            height={HEIGHT_CARD_MEDIA}
            image={kinopoiskMovie?.movieInfo?.posterUrlPreview}
          />
        ) : (
          <NotFoundCardMedia>Постер не найден</NotFoundCardMedia>
        )}
        <CardContent>
          <Typography variant="caption" component="div">
            <b>{movie.ru_title}</b>
          </Typography>
          <Typography color="GrayText" variant="caption" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
