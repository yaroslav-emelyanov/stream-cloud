import { colors } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

export const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  backgroundColor: colors.lightBlue[100],
}));

export const Main = styled('main')(() => ({
  flex: 1,
  overflow: 'auto',
}));
