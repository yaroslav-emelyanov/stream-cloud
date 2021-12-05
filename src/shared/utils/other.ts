import { YOUTUBE_REGEX } from '@shared/constants';

export const parseIdYouTubeUrl = (url?: string): string | undefined => {
  const match = url?.match(YOUTUBE_REGEX);

  if (match && match[2].length === 11) {
    return match[2];
  }
};
