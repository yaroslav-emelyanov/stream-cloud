import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IconButton, Tooltip } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import NavTabs from '@components/NavTabs';
import Loading from '@components/Loading';
import DialogView from '@components/DialogView';

import { ContentWrapper, Nav, Main } from './styles';
import { DialogTypes } from '@shared/constants';

const MainLayout: React.FC = ({ children }) => {
  const [, setSearchParams] = useSearchParams();

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
          <IconButton
            onClick={() => setSearchParams({ dialog: DialogTypes.LOGIN })}
          >
            <LockOpenIcon />
          </IconButton>
        </Tooltip>
      </Nav>
      <Main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Main>
      <DialogView />
    </ContentWrapper>
  );
};

export default MainLayout;
