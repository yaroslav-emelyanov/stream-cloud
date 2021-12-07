import React, { useMemo } from 'react';

import { CardMedia, Typography } from '@mui/material';
import { Serial, useKinopoiskSerial } from '@entities/serial';

import {
  Card,
  Skeleton,
  CardContent,
  CardActionArea,
  NotFoundCardMedia,
  HEIGHT_CARD_MEDIA,
} from './styles';

interface MovieCardProps {
  serial: Serial;
  onClick: () => void;
}

const SerialCard: React.FC<MovieCardProps> = ({ serial, onClick }) => {
  const kinopoiskSerial = useKinopoiskSerial(serial.kinopoisk_id);

  const genre = kinopoiskSerial?.movieInfo?.genres[0]?.genre;

  const description = useMemo(
    () =>
      [new Date(serial.start_date).getFullYear(), genre]
        .filter(Boolean)
        .join(', '),
    [serial.start_date, genre]
  );

  return (
    <Card onClick={onClick}>
      <CardActionArea>
        {kinopoiskSerial?.loading ? (
          <Skeleton variant="rectangular" />
        ) : kinopoiskSerial?.movieInfo?.posterUrlPreview ? (
          <CardMedia
            component="img"
            alt={serial.ru_title}
            height={HEIGHT_CARD_MEDIA}
            image={kinopoiskSerial?.movieInfo?.posterUrlPreview}
          />
        ) : (
          <NotFoundCardMedia>Постер не найден</NotFoundCardMedia>
        )}
        <CardContent>
          <Typography variant="caption" component="div">
            <b>{serial.ru_title}</b>
          </Typography>
          <Typography color="GrayText" variant="caption" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SerialCard;
