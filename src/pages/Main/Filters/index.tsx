import React from 'react';

import { Button } from '@mui/material';

import { resetFilters, useSearch } from '@entities/film';

import YearSlider from './YearSlider';
import RatingSlider from './RatingSlider';

import TypeSelect from './TypeSelect';
import SearchField from './SearchField';
import GenreSelect from './GenreSelect';
import OrderSelect from './OrderSelect';
import CountrySelect from './CountrySelect';

import { FiltersContainer, SelectContainer, SliderContainer } from './styles';

const Filters = () => {
  const search = useSearch();

  return (
    <FiltersContainer>
      <SelectContainer>
        <SearchField />
        <TypeSelect />
        <GenreSelect />
        <CountrySelect />
        <OrderSelect />
        <Button
          onClick={() => resetFilters()}
          variant="contained"
          disabled={Boolean(search)}
        >
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
};

export default Filters;
