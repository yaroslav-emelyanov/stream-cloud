import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import RouterView from './router-view';

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
