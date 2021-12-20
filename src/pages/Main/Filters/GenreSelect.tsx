import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import { selectGenres, useFiltersDisabled, useGenres } from '@entities/film';

const GenreSelect = () => {
  const { genres, selectedGenres } = useGenres();
  const disabled = useFiltersDisabled();

  return (
    <FormControl className="genre-select" size="small" fullWidth>
      <InputLabel id="genres-label">Жанры</InputLabel>
      <Select
        labelId="genres-label"
        value={selectedGenres}
        multiple
        onChange={(e) => selectGenres(e.target.value as number[])}
        input={<OutlinedInput label="Жанры" />}
        disabled={disabled}
      >
        {genres.map((genre) => (
          <MenuItem value={genre.id} key={genre.id}>
            {genre.genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenreSelect;
