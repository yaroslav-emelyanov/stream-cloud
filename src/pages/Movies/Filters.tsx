import React, { useState } from 'react';

import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment } from '@mui/material';

const Filters = () => {
  const [year, setYear] = useState<Date | null>(new Date());

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
      <TextField
        placeholder="Поиск"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => {}} size="small" edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DatePicker
        views={['year']}
        InputProps={{ size: 'small' }}
        value={year}
        onChange={setYear}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </div>
  );
};

export default Filters;
