import { ContentTypes } from '@shared/constants';

export interface VCDNResponse<T> {
  current_page: number;
  data: T[];
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

export interface VCDNShortData {
  id: number;
  title: string;
  orig_title: string;
  kp_id: string;
  imdb_id: string;
  world_art_id: string | null;
  type: ContentTypes;
  add: string;
  year: string;
  translations: string[];
  quality: string;
  translation: string;
  update: string;
  iframe_src: string;
}
