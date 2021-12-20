import { restore, Event, createEffect } from 'effector';
import { debounce } from 'patronum/debounce';

export const createLocalStorageStore = <T>(
  event: Event<T>,
  defaultState: T,
  storageKey: string,
  delay: number = 1000
) => {
  const toLocalStoreFx = createEffect<T, void>((state) =>
    localStorage.setItem(storageKey, JSON.stringify(state))
  );
  const $store = restore<T>(event, defaultState);

  try {
    const state = JSON.parse(localStorage.getItem(storageKey) || '');
    event(state);
  } catch (err) {}

  debounce({
    source: $store,
    timeout: delay,
    target: toLocalStoreFx,
  });

  return $store;
};
