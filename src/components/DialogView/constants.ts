import React from 'react';

import { DialogTypes, ContentTypes } from '@shared/constants';

import {
  LoginDialog,
  MovieWatchDialog,
  SerialWatchDialog,
  MoviePreviewDialog,
  RegistrationDialog,
  SerialPreviewDialog,
} from '@components/Dialogs';

const PREVIEW_DIALOGS: Record<ContentTypes, React.FC> = {
  [ContentTypes.MOVIE]: MoviePreviewDialog,
  [ContentTypes.SERIAL]: SerialPreviewDialog,
};

const WATCH_DIALOGS: Record<ContentTypes, React.FC> = {
  [ContentTypes.MOVIE]: MovieWatchDialog,
  [ContentTypes.SERIAL]: SerialWatchDialog,
};

export const DIALOGS_MAP: Record<
  DialogTypes,
  (isAuthorized: boolean, searchParams: URLSearchParams) => React.FC | null
> = {
  [DialogTypes.LOGIN]: (isAuth) => (!isAuth ? LoginDialog : null),
  [DialogTypes.REGISTERATION]: (isAuth) =>
    !isAuth ? RegistrationDialog : null,
  [DialogTypes.PREVIEW]: (_, params) =>
    PREVIEW_DIALOGS[params.get('type') as ContentTypes],
  [DialogTypes.WATCH]: (isAuth, params) =>
    isAuth ? WATCH_DIALOGS[params.get('type') as ContentTypes] : null,
};
