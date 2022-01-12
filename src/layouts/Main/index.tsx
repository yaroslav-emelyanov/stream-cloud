import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import NavTabs from '@components/NavTabs';
import Loading from '@components/Loading';
import DialogView from '@components/DialogView';
import { IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButtonMenu from '@components/IconButtonMenu';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNav } from '@shared/hooks';
import { useIsAuthorized, useUser } from '@entities/user';

import { ContentWrapper, Nav, Main } from './styles';
import { logoutFx } from './model';

const MainLayout: React.FC = ({ children }) => {
  const isAuthorized = useIsAuthorized();
  const user = useUser();
  const nav = useNav();

  return (
    <ContentWrapper>
      <Nav>
        <NavTabs
          list={[
            {
              label: 'Премьеры',
              to: '/premiers',
            },
            {
              label: 'Главная',
              to: '/',
            },
            {
              label: 'Избранное',
              to: '/favorites',
            },
            {
              label: 'История',
              to: '/history',
            },
          ]}
        />
        {isAuthorized ? (
          <IconButtonMenu
            icon={<AccountCircleIcon />}
            list={[
              {
                label: user?.email || '',
                disabled: true,
                onClick: logoutFx,
              },
              {
                label: 'Выйти',
                icon: <LogoutIcon fontSize="small" />,
                onClick: logoutFx,
              },
            ]}
          />
        ) : (
          <Tooltip title="Авторизация">
            <IconButton onClick={nav.open.login}>
              <LockOpenIcon />
            </IconButton>
          </Tooltip>
        )}
      </Nav>
      <Main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Main>
      <DialogView />
      <ToastContainer draggable={false} />
    </ContentWrapper>
  );
};

export default MainLayout;
