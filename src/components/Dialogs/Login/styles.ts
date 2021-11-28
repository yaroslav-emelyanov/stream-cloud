import { styled } from '@mui/material/styles';

export const Form = styled('form')(({ theme }) => ({
  '& > :first-child': {
    marginTop: theme.spacing(1),
  },
  '& > :not(:first-child)': {
    marginTop: theme.spacing(2),
  },
}));
