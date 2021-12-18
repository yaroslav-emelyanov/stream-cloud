import { colors, styled, Skeleton as SkeletonMui } from '@mui/material';

export const PREVIEW_HEIGHT = 320;

export const SkeletonPreview = styled(SkeletonMui)({
  height: PREVIEW_HEIGHT,
});

export const NotFoundPreview = styled('div')(() => ({
  height: PREVIEW_HEIGHT,
  backgroundColor: colors.grey[300],
  color: colors.grey[900],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
