import { restore, Event } from 'effector';

export const createLocalStorageStore = <T>(
  event: Event<T>,
  defaultState: T,
  storageKey: string
) => {
  const $store = restore<T>(event, defaultState);

  try {
    const state = JSON.parse(localStorage.getItem(storageKey) || '');
    event(state);
  } catch (err) {}

  $store.watch((newState) =>
    localStorage.setItem(storageKey, JSON.stringify(newState))
  );

  return $store;
};
