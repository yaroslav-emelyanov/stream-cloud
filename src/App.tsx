import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { colors, CssBaseline } from '@mui/material';

import RouterView from './router-view';

const theme = createTheme({
  palette: {
    text: {
      primary: colors.grey[50],
    },
    primary: {
      main: colors.orange[600],
      contrastText: colors.grey[50],
    },
    background: {
      paper: colors.grey[600],
    },
  },
  components: {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          gap: 16,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: colors.grey[700],
          backgroundColor: colors.grey[100],
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          color: colors.grey[700],
          backgroundColor: colors.grey[100],
        },
        markLabel: {
          color: 'white',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-selected': {
            color: 'white',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
        },
        notchedOutline: {
          borderColor: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'white',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
  },
});

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
