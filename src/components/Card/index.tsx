import React from 'react';

import { CardMedia, Typography } from '@mui/material';

import {
  Card as MuiCard,
  Skeleton,
  CardContent,
  CardActionArea,
  NotFoundCardMedia,
  HEIGHT_CARD_MEDIA,
} from './styles';

interface CardProps {
  title: string;
  onClick?: () => void;
  description?: string;
  loading?: boolean;
  posterUrl?: string;
}

const Card: React.FC<CardProps> = ({
  onClick,
  title,
  description,
  posterUrl,
  loading,
}) => {
  return (
    <MuiCard>
      <CardActionArea onClick={onClick} disabled={loading}>
        {loading ? (
          <Skeleton variant="rectangular" />
        ) : posterUrl ? (
          <CardMedia
            component="img"
            alt={title}
            height={HEIGHT_CARD_MEDIA}
            image={posterUrl}
          />
        ) : (
          <NotFoundCardMedia>Постер не найден</NotFoundCardMedia>
        )}
        <CardContent>
          <Typography variant="caption" component="div">
            <b>{title}</b>
          </Typography>
          <Typography color="GrayText" variant="caption" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
