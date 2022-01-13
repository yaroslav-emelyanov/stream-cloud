import { styled } from '@mui/material';

interface NotAuthorizedContainerProps {
  height?: number | string;
  width?: number | string;
}

export const NotAuthorizedContainer = styled(
  'div'
)<NotAuthorizedContainerProps>(({ height, width, theme }) => ({
  height,
  width,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[500],
}));
