import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

import NavTabs from '@components/NavTabs';
import Loading from '@components/Loading';
import DialogView from '@components/DialogView';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import IconButtonMenu from '@components/IconButtonMenu';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { DialogTypes } from '@shared/constants';
import { useIsAuthorized } from '@entities/user';

import { ContentWrapper, Nav, Main } from './styles';
import { logoutFx } from './model';

const MainLayout: React.FC = ({ children }) => {
  const [, setSearchParams] = useSearchParams();
  const isAuthorized = useIsAuthorized();

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
        {isAuthorized ? (
          <IconButtonMenu
            icon={<AccountCircleIcon />}
            list={[
              {
                label: 'Выйти',
                icon: <LogoutIcon fontSize="small" />,
                onClick: logoutFx,
              },
            ]}
          />
        ) : (
          <Tooltip title="Авторизация">
            <IconButton
              onClick={() => setSearchParams({ dialog: DialogTypes.LOGIN })}
            >
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
