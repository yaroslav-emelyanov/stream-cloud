import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const Form = styled('form')(({ theme }) => ({
  '& > :first-child': {
    marginBottom: theme.spacing(2),
  },
  '& > :not(:first-child)': {
    marginTop: theme.spacing(1),
  },
}));
