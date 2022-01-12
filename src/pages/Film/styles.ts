import { styled } from '@mui/material';

export const PageContainer = styled('div')(({ theme }) => ({
  maxWidth: 1280,
  margin: '0 auto',
  padding: theme.spacing(4),
}));

export const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const Information = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
}));

export const SimilarContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const SimilarList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

export const Media = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
}));
