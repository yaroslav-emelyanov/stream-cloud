import React from 'react';

import { CardMedia, Typography } from '@mui/material';

import {
  Chip,
  Skeleton,
  CardContent,
  CardActionArea,
  Card as MuiCard,
  NotFoundCardMedia,
  HEIGHT_CARD_MEDIA,
} from './styles';

interface CardProps {
  title: string;
  onClick?: () => void;
  rating?: string;
  description?: React.ReactNode;
  loading?: boolean;
  posterUrl?: string;
}

const Card: React.FC<CardProps> = ({
  onClick,
  title,
  rating,
  description,
  posterUrl,
  loading,
}) => {
  return (
    <MuiCard>
      <CardActionArea
        style={{ position: 'relative' }}
        onClick={onClick}
        disabled={loading}
      >
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
        {rating && <Chip label={rating} color="primary" size="small" />}
        <CardContent>
          <Typography variant="caption" component="div">
            <b>{title}</b>
          </Typography>
          <Typography color="whitesmoke" variant="caption" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
