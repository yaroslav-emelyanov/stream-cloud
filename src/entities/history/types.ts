import { KinopoiskMovie } from '@shared/types/kinopoisk';

export interface HistoryMovie extends KinopoiskMovie {
  added_to_history: string;
}
