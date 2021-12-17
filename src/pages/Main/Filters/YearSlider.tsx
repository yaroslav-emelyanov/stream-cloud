import React from 'react';

import { Slider, Typography } from '@mui/material';

import { useYear, setYear, MIN_YEAR, MAX_YEAR } from '@entities/film';

const marks = [
  {
    label: 2021,
    value: 2021,
  },
  {
    label: 1888,
    value: 1888,
  },
];

const YearSlider = () => {
  const year = useYear();

  return (
    <>
      <Typography variant="caption">Год</Typography>
      <Slider
        value={year}
        min={MIN_YEAR}
        max={MAX_YEAR}
        size="small"
        marks={marks}
        onChange={(_, value) => setYear(value as typeof year)}
        valueLabelDisplay="auto"
        disableSwap
      />
    </>
  );
};

export default YearSlider;
