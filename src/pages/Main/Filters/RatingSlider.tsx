import React from 'react';

import { Slider, Typography } from '@mui/material';

import { useRating, setRating, useFiltersDisabled } from '@entities/film';

const marks = [
  {
    label: 10,
    value: 10,
  },
  {
    label: 0,
    value: 0,
  },
];

const RatingSlider = () => {
  const disabled = useFiltersDisabled();
  const rating = useRating();

  return (
    <>
      <Typography variant="caption">Рейтинг</Typography>
      <Slider
        value={rating}
        step={1}
        max={10}
        size="small"
        marks={marks}
        onChange={(_, value) => setRating(value as typeof rating)}
        valueLabelDisplay="auto"
        disabled={disabled}
        disableSwap
      />
    </>
  );
};

export default RatingSlider;
