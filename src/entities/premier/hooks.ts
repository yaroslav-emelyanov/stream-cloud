import { useStore } from 'effector-react';
import { $premieres, $kinopoiskItems } from './premiers';

export const usePremiers = () => useStore($premieres);

export const usePremierMovies = () => useStore($kinopoiskItems);
