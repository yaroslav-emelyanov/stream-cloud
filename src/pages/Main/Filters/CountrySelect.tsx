import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import {
  selectCountries,
  useCountries,
  useFiltersDisabled,
} from '@entities/films';

const CountrySelect = () => {
  const { countries, selectedCountries } = useCountries();
  const disabled = useFiltersDisabled();

  return (
    <FormControl className="country-select" size="small" fullWidth>
      <InputLabel id="countries-label">Страны</InputLabel>
      <Select
        labelId="countries-label"
        value={selectedCountries}
        multiple
        onChange={(e) => selectCountries(e.target.value as number[])}
        input={<OutlinedInput label="Страны" />}
        disabled={disabled}
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
