import { colors } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentWrapper = styled('div')(() => ({
  backgroundColor: colors.grey[500],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));
