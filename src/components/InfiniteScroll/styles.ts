import { styled, Typography } from '@mui/material';

export const EndMessage = styled(Typography)(() => ({
  width: '100%',
}));

export const ProgressWrapper = styled(Typography)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const InfiniteScrollContainer = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

export const Filters = styled('div')(({ theme }) => ({
  position: 'sticky',
  left: 0,
  top: 0,
  width: '100%',
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  backgroundColor: theme.palette.background.paper,
  zIndex: 1,
}));
