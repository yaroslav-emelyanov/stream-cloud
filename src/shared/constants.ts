export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_MIN_LENGTH = 6;

export const YOUTUBE_REGEX =
  // eslint-disable-next-line
  /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export enum DialogTypes {
  LOGIN = 'login',
  REGISTERATION = 'registration',
  PREVIEW = 'preview',
  WATCH = 'watch',
}

export enum ContentTypes {
  MOVIE = 'movie',
  SERIAL = 'serial',
}

export const FIREBASE_ERROR_MESSAGES: Record<string, string> = {
  'auth/user-not-found': 'Пользователь не найден',
  'auth/wrong-password': 'Не верный пароль',
  'auth/email-already-in-use': 'Эта электронная почта уже используется',
};

export const AXIOS_ERROR_MESSAGES: Record<number, string> = {
  421: 'Пустой или неправильный токен',
  429: 'Слишком много запросов',
  400: 'Неправильный запрос',
};

export const AppMessages = {
  DEFAULT_ERROR: 'Что то пошло не так...',
} as const;

export enum KinopoiskMonths {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}
