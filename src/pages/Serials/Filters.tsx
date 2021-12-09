import React from 'react';

import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, IconButton, InputAdornment } from '@mui/material';

import { filters, useFilters } from '@entities/serial';

const Filters = () => {
  const { query, year } = useFilters();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
      <TextField
        placeholder="Поиск"
        value={query}
        onChange={(e) => filters.setQuery(e.target.value)}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => filters.setQuery('')}
                size="small"
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DatePicker
        views={['year']}
        InputProps={{
          size: 'small',
        }}
        value={year}
        clearable
        onChange={filters.setYear}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
      <Button onClick={() => filters.reset()} variant="outlined" size="small">
        сброс
      </Button>
    </div>
  );
};

export default Filters;
