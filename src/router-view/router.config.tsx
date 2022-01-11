import { RouteObject } from 'react-router-dom';

import MainLayout from '../layouts/Main';

import MainPage from '../pages/Main';
import HistoryPage from '../pages/History';
import PremiersPage from '../pages/Premiers';
import NotFoundPage from '../pages/NotFound';
import FavoritesPage from '../pages/Favorites';

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
    path: '/history',
    element: (
      <MainLayout>
        <HistoryPage />
      </MainLayout>
    ),
  },
  {
    path: '/favorites',
    element: (
      <MainLayout>
        <FavoritesPage />
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
