import React from 'react';
import { useStore } from 'effector-react';
import { useForm } from 'react-hook-form';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '@shared/constants';
import { useNav } from '@shared/hooks';

import { Form } from './styles';
import { IForm, loginFx } from './model';

const LoginDialog: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const loading = useStore(loginFx.pending);
  const nav = useNav();

  return (
    <>
      <DialogTitle>Авторизация</DialogTitle>
      <DialogContent>
        <Form id="login" onSubmit={handleSubmit(loginFx)}>
          <TextField
            label="Электронная почта"
            {...register('email', {
              required: { value: true, message: 'Введите почту' },
              pattern: {
                value: EMAIL_REGEX,
                message: 'Введите валидную почту',
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email?.message || ' '}
            fullWidth
          />
          <TextField
            label="Пароль"
            {...register('password', {
              required: { value: true, message: 'Введите пароль' },
              minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: `Пароль должен быть не менее ${
                  PASSWORD_MIN_LENGTH - 1
                } символов`,
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password?.message || ' '}
            type="password"
            margin="dense"
            fullWidth
          />
        </Form>
        <Typography variant="caption" component="div" align="right">
          Ещё не зарегистрированы?{' '}
          <Link
            component="button"
            onClick={nav.open.registeration}
            underline="none"
          >
            Регистрация
          </Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={nav.close} variant="outlined">
          Назад
        </Button>
        <LoadingButton
          loading={loading}
          form="login"
          type="submit"
          variant="contained"
        >
          Войти
        </LoadingButton>
      </DialogActions>
    </>
  );
};

export default LoginDialog;
