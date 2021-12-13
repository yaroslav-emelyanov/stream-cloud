import { KinopoiskCountry, KinopoiskGenre } from '@shared/types';

export interface Premier {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: KinopoiskCountry[];
  genres: KinopoiskGenre[];
  duration: number;
  premiereRu: string;
}
