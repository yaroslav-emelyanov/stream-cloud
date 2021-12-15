import { KinopoiskCountry, KinopoiskGenre } from '@shared/types';

export enum FilmOrders {
  RATING = 'RATING',
  NUM_VOTE = 'NUM_VOTE',
  YEAR = 'YEAR',
}

export enum FilmTypes {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  ALL = 'ALL',
}

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: FilmTypes;
  year: string;
  description: string;
  filmLength: string;
  countries: KinopoiskCountry[];
  genres: KinopoiskGenre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface GetFilmsParams {
  page: number;
  order: FilmOrders;
  type: FilmTypes;
  rating: [number, number];
  yearFrom: Date | null;
  genres: number[];
  countries: number[];
}

export interface FilmResponse {
  pagesCount: number;
  films: Film[];
}

export interface FilterGenre {
  id: number;
  genre: string;
}

export interface FilterCountry {
  id: number;
  country: string;
}

export interface FiltersResponse {
  genres: FilterGenre[];
  countries: FilterCountry[];
}
