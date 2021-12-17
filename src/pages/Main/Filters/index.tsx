import React from 'react';

import { Button } from '@mui/material';

import { resetFilters } from '@entities/film';

import YearSlider from './YearSlider';
import RatingSlider from './RatingSlider';

import TypeSelect from './TypeSelect';
import GenreSelect from './GenreSelect';
import OrderSelect from './OrderSelect';
import CountrySelect from './CountrySelect';

import { FiltersContainer, SelectContainer, SliderContainer } from './styles';

const Filters = () => (
  <FiltersContainer>
    <SelectContainer>
      <TypeSelect />
      <GenreSelect />
      <CountrySelect />
      <OrderSelect />
      <Button onClick={() => resetFilters()} variant="contained">
        Сброс
      </Button>
    </SelectContainer>
    <SliderContainer>
      <div style={{ width: '35%' }}>
        <RatingSlider />
      </div>
      <div style={{ width: '65%' }}>
        <YearSlider />
      </div>
    </SliderContainer>
  </FiltersContainer>
);

export default Filters;
