import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { CssBaseline } from '@mui/material';

import RouterView from './router-view';

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <BrowserRouter>
          <RouterView />
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
