import { useRoutes } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';
import { useIsAuthChecking } from '@entities/user';

import { routerConfig } from './router.config';
import { useRouterGate } from './model';

const RouterView = () => {
  const isAuthChecking = useIsAuthChecking();
  const routes = useRoutes(routerConfig);

  useRouterGate();

  if (isAuthChecking) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  return routes;
};

export default RouterView;
