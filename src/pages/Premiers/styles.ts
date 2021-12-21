import { styled } from '@mui/material';

export const PremierContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
  padding: theme.spacing(4),
}));
