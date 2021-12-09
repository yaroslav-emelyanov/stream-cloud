import OriginalInfiniteScroll from 'react-infinite-scroll-component';
import { styled, Typography } from '@mui/material';

export const EndMessage = styled(Typography)(() => ({
  width: '100%',
}));

export const ProgressWrapper = styled(Typography)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const InfiniteScrollContainer = styled('div')({
  height: '100%',
  overflow: 'auto',
});

export const InfiniteScroll = styled(OriginalInfiniteScroll)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
  height: '100%',
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
