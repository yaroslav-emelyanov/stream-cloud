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

import { FiltersContainer } from './styles';

const Filters = () => {
  const search = useSearch();

  return (
    <FiltersContainer>
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
      <RatingSlider />
      <YearSlider />
    </FiltersContainer>
  );
};

export default Filters;
