import { styled } from '@mui/material';

export const FiltersContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '2fr repeat(4, 1fr) 1fr',

  '& .rating-slider': {
    gridColumn: '1/3',
  },

  '& .year-slider': {
    gridColumn: '3/7',
  },

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',

    '& .search-field': {
      gridColumn: '1/5',
    },

    '& .type-select': {
      gridColumn: '5/7',
    },

    '& .genre-select': {
      gridColumn: '1/3',
    },

    '& .country-select': {
      gridColumn: '3/5',
    },

    '& .order-select': {
      gridColumn: '5/7',
    },

    '& button': {
      gridColumn: '1/3',
      order: 1,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',

    '& .search-field': {
      gridColumn: '1',
    },

    '& .rating-slider': {
      gridColumn: '1',
    },

    '& .year-slider': {
      gridColumn: '1',
    },

    '& .type-select': {
      gridColumn: '1',
    },

    '& .genre-select': {
      gridColumn: '1',
    },

    '& .country-select': {
      gridColumn: '1',
    },

    '& .order-select': {
      gridColumn: '1',
    },
  },
}));

export const SelectContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: 'repeat(5, 2fr) 1fr',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
}));

export const SliderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  padding: `0 ${theme.spacing(2)}`,
}));
