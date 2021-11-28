import { User } from '@firebase/auth';
import { useStore } from 'effector-react';

import { $user, $isAuthChecking, $isAuthorized } from './user';

export const useUser = () => useStore($user) as User;
export const useIsAuthorized = () => useStore($isAuthorized);
export const useIsAuthChecking = () => useStore($isAuthChecking);
