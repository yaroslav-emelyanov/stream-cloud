type ContentType = 'movie' | 'anime';

interface Quality {
  id: number;
  url: string;
  resolution: number;
  media_id: number;
}

interface Translation {
  id: number;
  title: string;
  priority: number;
  iframe_src: string;
  iframe: string;
  short_title: string;
  smart_title: string;
  shorter_title: string;
}

interface Media {
  id: number;
  translation_id: number;
  content_id: number;
  content_type: ContentType;
  tv_series_id: null;
  source_quality: string;
  max_quality: number;
  path: string;
  duration: number;
  created: string;
  accepted: string;
  deleted_at: null;
  blocked: 0;
  qualities: Quality[];
  translation: Translation;
}

export interface Movie {
  blocked: number;
  content_type: ContentType;
  created: string;
  default_media_id: null;
  id: number;
  iframe: string;
  iframe_src: string;
  imdb_id: string;
  kinopoisk_id: string;
  last_media_accepted: string;
  media: Media[];
  orig_title: string;
  ru_title: string;
  preview_iframe_src: string;
  released: string;
  translations: Translation[];
  updated: string;
  year: string;
}

export interface MovieResponse {
  current_page: number;
  data: Movie[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  result: true;
  to: number;
  total: number;
  total_count: number;
}

interface KinopoiskCountry {
  country: string;
}

interface KinopoiskGenre {
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
  movieInfo: KinopoiskMovie | null;
  loading: boolean;
}

export interface KinopoiskVideo {
  url: string;
  name: string;
  site: string;
}

export interface KinopoiskVideoResponse {
  total: number;
  items: KinopoiskVideo[];
}
