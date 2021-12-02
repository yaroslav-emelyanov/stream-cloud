import { createEffect, split, Unit } from 'effector';
import { toast } from 'react-toastify';
import { FirebaseError } from '@firebase/util';
import {
  AppMessages,
  AXIOS_ERROR_MESSAGES,
  FIREBASE_ERROR_MESSAGES,
} from '@shared/constants';
import { AxiosError } from 'axios';

const defaultErrorFx = createEffect(() => {
  toast.error(AppMessages.DEFAULT_ERROR);
});

const firebaseErrorHandlerFx = createEffect<FirebaseError, void>((e) => {
  const message = FIREBASE_ERROR_MESSAGES[e.code];
  if (message) {
    toast.error(message);
  } else {
    defaultErrorFx();
  }
});

const axiosErrorHandlerFx = createEffect<AxiosError, void>((e) => {
  const message = AXIOS_ERROR_MESSAGES[e.response!.status];

  if (message) {
    toast.error(message);
  } else {
    defaultErrorFx();
  }
});

export const handleError = <T>(source: Unit<T>) =>
  split({
    source,
    match: {
      firebase: (e) => e instanceof FirebaseError,
      axios: (e) => (e as any).isAxiosError,
    },
    cases: {
      firebase: firebaseErrorHandlerFx,
      axios: axiosErrorHandlerFx,
      __: defaultErrorFx,
    },
  });
