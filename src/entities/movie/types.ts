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
