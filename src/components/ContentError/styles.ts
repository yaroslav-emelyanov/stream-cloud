import { styled } from '@mui/material';

interface ContentErrorContainerProps {
  height: number | string;
  width: number | string;
}

export const ContentErrorContainer = styled('div')<ContentErrorContainerProps>(
  ({ height, width, theme }) => ({
    height,
    width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[500],
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(2),
    },
  })
);
