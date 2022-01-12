import React from 'react';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { useSearch, setSearch } from '@entities/films';

const SearchField = () => {
  const search = useSearch();

  return (
    <TextField
      className="search-field"
      label="Поиск"
      size="small"
      value={search}
      onChange={(e) => setSearch(e.target.value as string)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setSearch('')}
              edge="end"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchField;
