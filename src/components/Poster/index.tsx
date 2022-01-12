import React from 'react';

import { Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Image } from './styles';

interface PosterProps {
  height: number;
  width: number;
  src?: string;
  loading?: boolean;
  isFavorite?: boolean;
  rating?: number | null;
  onChangeFavorite?: () => void;
}

const Poster: React.FC<PosterProps> = ({
  height,
  width,
  src,
  rating,
  isFavorite,
  onChangeFavorite,
}) => {
  return (
    <Image width={width} height={height} src={src}>
      {rating && <Chip label={rating} />}
      <IconButton onClick={onChangeFavorite}>
        {isFavorite ? (
          <FavoriteIcon color="primary" fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </IconButton>
    </Image>
  );
};
export default Poster;
