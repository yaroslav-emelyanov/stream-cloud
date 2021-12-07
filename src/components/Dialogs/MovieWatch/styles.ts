import { colors, styled, Skeleton as SkeletonMui } from '@mui/material';

export const WATCH_HEIGHT = 320;

export const SkeletonWatch = styled(SkeletonMui)({
  height: WATCH_HEIGHT,
});

export const NotFoundPreview = styled('div')(() => ({
  height: WATCH_HEIGHT,
  backgroundColor: colors.grey[300],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
