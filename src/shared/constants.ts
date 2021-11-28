export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_MIN_LENGTH = 6;

export enum DialogTypes {
  LOGIN = 'login',
  REGISTERATION = 'registration',
}

export const FIREBASE_ERROR_MESSAGES: Record<string, string> = {
  'auth/user-not-found': 'User is not found',
  'auth/wrong-password': 'Wrong password',
  'auth/email-already-in-use': 'This email is already in use',
};

export const AppMessages = {
  DEFAULT_ERROR: 'Something went wrong',
} as const;
