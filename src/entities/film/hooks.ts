import { useStore } from 'effector-react';
import { $order, $selectedGenres } from '.';

import { $films, getFilmsByFiltersFx, getFilmsFx } from './film';
import {
  $countries,
  $filters,
  $genres,
  $rating,
  $type,
  $selectedCountries,
  $year,
} from './filters';
import { $hasMorePages } from './pagination';

export const useFilms = () => useStore($films);

export const useLoading = () => useStore(getFilmsFx.pending);

export const useHasMorePages = () => useStore($hasMorePages);

export const useFilters = () => useStore($filters);

export const useGenres = () => {
  const selectedGenres = useStore($selectedGenres);
  const genres = useStore($genres);

  return {
    genres,
    selectedGenres,
  };
};

export const useOrder = () => useStore($order);

export const useRating = () => useStore($rating);

export const useType = () => useStore($type);

export const useCountries = () => {
  const countries = useStore($countries);
  const selectedCountries = useStore($selectedCountries);

  return {
    countries,
    selectedCountries,
  };
};

export const useYear = () => useStore($year);

export const useFiltersLoading = () => useStore(getFilmsByFiltersFx.pending);
