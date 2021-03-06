import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import {
  setType,
  useType,
  FilmTypes,
  useFiltersDisabled,
} from '@entities/films';

const TypeSelect = () => {
  const disabled = useFiltersDisabled();
  const type = useType();

  return (
    <FormControl className="type-select" size="small" fullWidth>
      <InputLabel id="type-label">Тип</InputLabel>
      <Select
        input={<OutlinedInput label="Тип" />}
        labelId="type-label"
        value={type}
        onChange={(e) => setType(e.target.value as FilmTypes)}
        disabled={disabled}
      >
        <MenuItem value={FilmTypes.ALL}>Все</MenuItem>
        <MenuItem value={FilmTypes.FILM}>Фильмы</MenuItem>
        <MenuItem value={FilmTypes.TV_SHOW}>Сериалы</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
