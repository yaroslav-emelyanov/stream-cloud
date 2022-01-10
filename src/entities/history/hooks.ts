import { useStore } from 'effector-react';
import { $movieHistory } from './history';

export const useMovieHistory = () => useStore($movieHistory);
