import React from 'react';

import { DialogTypes, ContentTypes } from '@shared/constants';

import {
  LoginDialog,
  WatchDialog,
  MoviePreviewDialog,
  RegistrationDialog,
  SerialPreviewDialog,
} from '@components/Dialogs';

const PREVIEW_DIALOGS: Record<ContentTypes, React.FC> = {
  [ContentTypes.MOVIE]: MoviePreviewDialog,
  [ContentTypes.SERIAL]: SerialPreviewDialog,
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
  [DialogTypes.WATCH]: (isAuth) => (isAuth ? WatchDialog : null),
};
