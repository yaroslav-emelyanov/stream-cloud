import { styled } from '@mui/material';

export const PageContainer = styled('div')(({ theme }) => ({
  maxWidth: 1280,
  margin: '0 auto',
  padding: theme.spacing(4),
}));

export const Media = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
}));
