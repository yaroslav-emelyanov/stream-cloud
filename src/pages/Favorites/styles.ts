import { styled } from '@mui/material';

export const PageContainer = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'flex-start',
}));
