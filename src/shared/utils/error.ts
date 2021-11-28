import { createEffect, split, Unit } from 'effector';
import { toast } from 'react-toastify';
import { FirebaseError } from '@firebase/util';
import { AppMessages, FIREBASE_ERROR_MESSAGES } from '@shared/constants';

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

export const handleError = <T>(source: Unit<T>) =>
  split({
    source,
    match: {
      firebase: (e) => e instanceof FirebaseError,
    },
    cases: {
      firebase: firebaseErrorHandlerFx,
      __: defaultErrorFx,
    },
  });
