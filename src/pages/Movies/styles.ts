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

export const InfiniteScroll = styled(OriginalInfiniteScroll)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
}));
