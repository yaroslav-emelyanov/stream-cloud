import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

import { IconButton, Tooltip } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import NavTabs from '@components/NavTabs';
import Loading from '@components/Loading';

import { ContentWrapper, Nav, Main } from './styles';

const MainLayout: React.FC = ({ children }) => {
  return (
    <ContentWrapper>
      <Nav>
        <NavTabs
          list={[
            {
              label: 'Главная',
              to: '/',
            },
            {
              label: 'Фильмы',
              to: '/movies',
            },
            {
              label: 'Сериалы',
              to: '/serials',
            },
          ]}
        />
        <Tooltip title="Авторизация">
          <IconButton to="/login" component={NavLink}>
            <LockOpenIcon />
          </IconButton>
        </Tooltip>
      </Nav>
      <Main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Main>
    </ContentWrapper>
  );
};

export default MainLayout;
