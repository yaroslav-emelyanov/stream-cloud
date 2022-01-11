import { colors, styled } from '@mui/material';

import {
  Card as MuiCard,
  Chip as MuiChip,
  Skeleton as MuiSkeleton,
  IconButton as MuiIconButton,
  CardContent as MuiCardContent,
  CardActionArea as MuiCardActionArea,
} from '@mui/material';

export const HEIGHT_CARD_MEDIA = 240;
const WIDTH_CARD_MEDIA = 160;

export const Card = styled(MuiCard)(() => ({
  width: WIDTH_CARD_MEDIA,
  position: 'relative',
  boxShadow: 'none',
}));

export const CardActionArea = styled(MuiCardActionArea)(() => ({
  position: 'relative',
  height: '100%',
}));

export const Skeleton = styled(MuiSkeleton)(() => ({
  height: HEIGHT_CARD_MEDIA,
}));

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: theme.spacing(1),
  height: `calc(100% - ${HEIGHT_CARD_MEDIA}px)`,
}));

export const NotFoundCardMedia = styled('div')(() => ({
  width: WIDTH_CARD_MEDIA,
  height: HEIGHT_CARD_MEDIA,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.grey[200],
}));

export const Chip = styled(MuiChip)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: 1,
}));

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(0.25),
  top: theme.spacing(0.25),
  zIndex: 1,
}));
