import { colors, styled } from '@mui/material';

import {
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
  Skeleton as MuiSkeleton,
  CardContent as MuiCardContent,
} from '@mui/material';

export const HEIGHT_CARD_MEDIA = 240;
const WIDTH_CARD_MEDIA = 160;

export const Card = styled(MuiCard)(() => ({
  width: WIDTH_CARD_MEDIA,
  boxShadow: 'none',
}));

export const CardActionArea = styled(MuiCardActionArea)(() => ({
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
