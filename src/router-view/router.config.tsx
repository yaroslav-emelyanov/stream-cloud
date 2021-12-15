import { RouteObject } from 'react-router-dom';

import MainLayout from '../layouts/Main';

import MainPage from '../pages/Main';
import MoviesPage from '../pages/Movies';
import SerialsPage from '../pages/Serials';
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
    path: '/movies',
    element: (
      <MainLayout>
        <MoviesPage />
      </MainLayout>
    ),
  },
  {
    path: '/serials',
    element: (
      <MainLayout>
        <SerialsPage />
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
