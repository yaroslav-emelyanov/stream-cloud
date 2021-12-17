import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import { selectCountries, useCountries } from '@entities/film';

const CountrySelect = () => {
  const { countries, selectedCountries } = useCountries();

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="countries-label">Страны</InputLabel>
      <Select
        labelId="countries-label"
        value={selectedCountries}
        multiple
        onChange={(e) => selectCountries(e.target.value as number[])}
        input={<OutlinedInput label="Страны" />}
      >
        {countries.map((country) => (
          <MenuItem value={country.id} key={country.id}>
            {country.country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;