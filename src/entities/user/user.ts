import { User } from '@firebase/auth';
import { createEvent, createStore } from 'effector';

export const setUser = createEvent<User | null>();

export const $user = createStore<User | null>(null).on(
  setUser,
  (_, user) => user
);

export const $isAuthChecking = createStore(true).on(setUser, () => false);

export const $isAuthorized = $user.map(Boolean);
