import { RouteObject } from 'react-router-dom';

import MainLayout from '../layouts/Main';

import MainPage from '../pages/Main';
import PremiersPage from '../pages/Premiers';
import NotFoundPage from '../pages/NotFound';

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
    path: '/premiers',
    element: (
      <MainLayout>
        <PremiersPage />
      </MainLayout>
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
