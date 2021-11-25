import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import MainLayout from '../layouts/Main';
import EmptyLayout from '../layouts/Empty';

import MainPage from '../pages/Main';
import NotFoundPage from '../pages/NotFound';

const LoginPage = lazy(
  () => import(/* webpackChunkName: "login-page" */ '../pages/Login')
);
const RegistrationPage = lazy(
  () =>
    import(/* webpackChunkName: "registration-page" */ '../pages/Registration')
);

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <EmptyLayout>
        <LoginPage />
      </EmptyLayout>
    ),
  },
  {
    path: '/registration',
    element: (
      <EmptyLayout>
        <RegistrationPage />
      </EmptyLayout>
    ),
  },
  {
    path: '*',
    element: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
  },
];
