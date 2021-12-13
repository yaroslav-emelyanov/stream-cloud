import { useStore } from 'effector-react';

import { $dialogMovie, $dialogMovieIsLoading } from './dialog-movie';

export const useDialogMovie = () => useStore($dialogMovie);

export const useDialogMovieIsLoading = () => useStore($dialogMovieIsLoading);
