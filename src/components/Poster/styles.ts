import { styled } from '@mui/material';

interface ImageProps {
  width: number;
  height: number;
  src?: string;
}

export const Image = styled('div')<ImageProps>(
  ({ theme, src, height, width }) => ({
    width,
    height,
    position: 'relative',
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '& .MuiChip-root': {
      position: 'absolute',
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
    '& .MuiIconButton-root': {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  })
);
