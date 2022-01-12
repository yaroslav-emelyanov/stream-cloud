import { useStore } from 'effector-react';

import {
  $film,
  getFilmFx,
  $filmTrailer,
  getFilmTrailerFx,
  $similarFilms,
  getSimilarFilmsFx,
  $inframeSrc,
  getIframeSrcFx,
} from './film';

export const useFilm = () => useStore($film);
export const useFilmLoading = () => useStore(getFilmFx.pending);

export const useFilmTrailer = () => useStore($filmTrailer);
export const useFilmTrailerLoading = () => useStore(getFilmTrailerFx.pending);

export const useSimilarFilms = () => useStore($similarFilms);
export const useSimilarFilmsLoading = () => useStore(getSimilarFilmsFx.pending);

export const useIframeSrc = () => useStore($inframeSrc);
export const useIframeSrcLoading = () => useStore(getIframeSrcFx.pending);
