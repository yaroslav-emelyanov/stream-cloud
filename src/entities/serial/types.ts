interface SerialTranslate {
  id: number;
  title: string;
  priority: number;
  episodes_count: number;
  source_quality: string;
  max_quality: number;
  iframe_src: string;
  iframe: string;
  short_title: string;
  smart_title: string;
  shorter_title: string;
}

interface SerialEpisodeMedia {
  id: number;
  translation_id: number;
  content_id: number;
  content_type: string;
  tv_series_id: number;
  source_quality: string;
  max_quality: number;
  path: string;
  duration: number;
  created: string;
  accepted: string;
  deleted_at: string | null;
  blocked: number;
}

interface SerialEpisode {
  id: number;
  tv_series_id: number;
  season_id: number;
  num: string;
  season_num: number;
  ru_title: string;
  orig_title: string;
  imdb_id: string;
  kinopoisk_id: string;
  released: string;
  ru_released: string;
  created: string;
  media: SerialEpisodeMedia[];
  translation: SerialTranslate;
}

export interface Serial {
  id: number;
  ru_title: string;
  orig_title: string;
  imdb_id: string;
  kinopoisk_id: string;
  season_count: number;
  episode_count: number;
  last_episode_id: number;
  start_date: string;
  end_date: string | null;
  created: string;
  updated: string;
  blocked: number;
  content_id: number | null;
  content_type: string;
  country_id: number | null;
  preview_iframe_src: string;
  iframe_src: string;
  iframe: string;
  translations: SerialTranslate[];
  episodes: SerialEpisode[];
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
