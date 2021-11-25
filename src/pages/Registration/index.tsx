import React from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import { Link, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '@shared/constants';

import { Form, FormWrapper } from './styles';

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper elevation={5}>
      <Form onSubmit={handleSubmit(() => {})}>
        <Typography variant="h4">Регистрация</Typography>
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
        <LoadingButton type="submit" variant="contained">
          Регистрация
        </LoadingButton>
        <Typography variant="caption" component="div" align="right">
          Уже есть аккаунт?{' '}
          <Link component={RouterLink} to="/login" underline="none">
            Войти
          </Link>
        </Typography>
      </Form>
    </FormWrapper>
  );
};

export default RegistrationPage;
