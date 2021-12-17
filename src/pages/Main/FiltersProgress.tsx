import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

interface FiltersProgressProps {
  show: boolean;
}

const FiltersProgress: React.FC<FiltersProgressProps> = ({ show }) => {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={show}>
      <div style={{ color: 'white' }}>
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  );
};

export default FiltersProgress;
