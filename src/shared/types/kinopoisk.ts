export interface KinopoiskCountry {
  country: string;
}

export interface KinopoiskGenre {
  genre: string;
}

export interface KinopoiskMovie {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: false;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: false;
  has3D: false;
  lastSync: string;
  countries: KinopoiskCountry[];
  genres: KinopoiskGenre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface KinopoiskMovieListItem {
  movieId: number;
  kinopoiskId: string;
  info: KinopoiskMovie | null;
  loading: boolean;
}

export interface KinopoiskVideo {
  url: string;
  name: string;
  site: string;
}

export interface KinopoiskResponse<T> {
  total: number;
  items: T[];
}
